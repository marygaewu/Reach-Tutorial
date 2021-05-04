'reach 0.1'; //reach version header

const [isHand,ROCK,PAPER, SCISSORS ] =makeEnum(3) 
const [isOutcome,B_WINS, DRAW,A_WINS] =makeEnum(3); //define enumerations for the hands that maybe played and the outcome

const winner =(handA, handB) =>
      ((handA + (4-handB))% 3); //function to compute the winners
 
assert(winner(ROCK, PAPER) == B_WINS);
assert(winner(PAPER, ROCK) == A_WINS);
assert(winner(ROCK,ROCK)   == DRAW); //asserts that if Alice plays Rock and Bob plays PAPER then Bob is expected to win

forall(UInt, handA => 
  forall(UInt, handB =>
    assert(isOutcome(winner(handA, handB))))); //incase of same values winner always return draw

  forall(UInt, (hand) =>
    assert(winner(hand, hand) ==DRAW));

const Player =
      { ...hasRandom, // <--new! // hasRandom is a reach stdlib that provide access to Random numbers from frontend
        getHand: Fun([], UInt),
        seeOutcome: Fun([UInt], Null),
        informTimeout: Fun([], Null) };

const Alice =
        { ...Player,
        wager: UInt };

const Bob =
        { ...Player,
          acceptWager: Fun([UInt], Null) };

const DEADLINE = 10; //Set deadline
export const main =
  Reach.App(
    {},
    [Participant('Alice', Alice), Participant('Bob', Bob)],
    (A, B) => {
      const informTimeout =() =>{
        each([A,B], () => {
          interact.informTimeout();
        });
      };
      A.only(() => {
        const _handA =interact.getHand();//Alice compute her hand but not declassify it
        const [_commitA, _saltA] =makeCommitment(interact, _handA);//reach stdlib to publish Alice hand but keep it secretly from Bob
        const [wager, commitA] = declassify([interact.wager, _commitA]); });
      A.publish(wager, commitA)//Alice publishes and include the wager funds
          .pay(wager);
      commit();
      
      unknowable(B, A(_handA, _saltA)); //state the knowledge assertion
      B.only(() => {
        interact.acceptWager(wager);
        const handB = declassify(interact.getHand()); });
      B.publish(handB)
          .pay(wager)
          .timeout(DEADLINE, () => closeTo(A, informTimeout));
        commit();//transaction is commited without computing the payout because Alice hand is not yet public
        
      A.only(() => {
        const [saltA, handA] =declassify([_saltA, _handA]); });//Alice declassify the commitment
      A.publish(saltA, handA) //she publishes it
        .timeout(DEADLINE, () => closeTo(B, informTimeout));
      checkCommitment(commitA, saltA, handA);//check if publish value match original value
  
      //const outcome = (handA + (4 - handB)) % 3;
      //require(handB ==(handA +1) %3);
      //assert(outcome ==0);
      const outcome =winner(handA, handB);
      const[forA,forB] =
           // outcome ==2? [2,0]:
            outcome == A_WINS ? [2,0]:
            outcome == B_WINS ? [0,2]:
            [1, 1];
      transfer(forA * wager).to(A);
      transfer(forB * wager).to(B);
      commit();

      each([A, B], () => {
        interact.seeOutcome(outcome); });
      exit(); });

 