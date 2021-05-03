'reach 0.1'; //reach version header

const [isHand,ROCK,PAPER, SCISSORS ] =makeEnum(3) 
const [isOutcome,B_WINS, DRAW,A_WINS] =makeEnum(3); //define enumerations for the hands that maybe played and the outcome

const winner =(handA, handB) =>
      ((handA + (4-handB))% 3); //function to compute the winners
 
assert(winner(ROCK, PAPER) == B_WINS);
assert(winner(PAPER, ROCK) == A_WINS);
assert(winner(ROCK,ROCK)   == DRAW); //asserts that if Alice plays Rock and Bob plays PAPER then Bob is expected to win

forall(UInt, handA => 
  forall(UInit, HandB =>
    assert(isOutcome(winner(handA, handB))))); //incase of same values winner always return draw

  forall(UInt, (hand) =>
    assert(winner(hand, hand) ==DRAW));

const Player =
      { ...hasRandom, // <--new! // hasRandom is a reach stdlib that provide access to Random numbers from frontend
        getHand: Fun([], UInt),
        seeOutcome: Fun([UInt], Null) };

const Alice =
        { ...Player,
        wager: UInt };

const Bob =
        { ...Player,
          acceptWager: Fun([UInt], Null) };

export const main =
  Reach.App(
    {},
    [Participant('Alice', Alice), Participant('Bob', Bob)],
    (A, B) => {
      A.only(() => {
        const_handA =interact.getHand();//Alice compute her hand but not declassify it
        const [_commitA, _saltA] =makeCommitment(interact, _handA);//reach stdlib to publish Alice hand but keep it secretly from Bob
        const [wager, commitA] = declassify(interact.wager,_commitA]); }); //Alice will declassify the commitment
      A.publish(wager,commitA)
          .pay(wager);
      commit();
      
      unknowable(B, A(handA));
      B.only(() => {
        interact.acceptWager(wager);
        const handB = declassify(interact.getHand()); });
      B.publish(handB)
          .pay(wager);

      const outcome = (handA + (4 - handB)) % 3;
      require(handB ==(handA +1) %3);
      assert(outcome ==0);
      const[forA,forB] =
           // outcome ==2? [2,0]:
            outcome ==0? [0,1]:
            outcome ==1? [1,1]:
            [2, 0];
      transfer(forA*wager).to(A);
      transfer(forB*wager).to(B);
      commit();

      each([A, B], () => {
        interact.seeOutcome(outcome); });
      exit(); });

 