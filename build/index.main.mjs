// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc0, ctc0]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0]);
  
  
  const v19 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.wager, null);
  const v23 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:22:50:application',
    fs: ['at ./index.rsh:20:13:application call to [unknown function] (defined at: ./index.rsh:20:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const txn1 = await (ctc.sendrecv(1, 2, stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0], [v19, v18, v23], [v18, []], [ctc0, ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, 0), v19]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, 0)]);
    const [v25, v26] = txn1.data;
    const v29 = txn1.time;
    const v24 = txn1.from;
    
    sim_r.txns.push({
      amt: v25,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:25:15:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v25, v26, v29]);
    sim_r.nextSt_noTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:25:15:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v25, v26]);
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v25, v26] = txn1.data;
  const v29 = txn1.time;
  const v24 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 1, [ctc0], false, false));
  const [v35] = txn2.data;
  const v38 = txn2.time;
  const v34 = txn2.from;
  ;
  const v39 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:33:33:decimal', stdlib.UInt_max, 4), v35);
  const v40 = stdlib.add(v26, v39);
  const v41 = stdlib.mod(v40, stdlib.checkedBigNumberify('./index.rsh:33:47:decimal', stdlib.UInt_max, 3));
  const v42 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:35:23:decimal', stdlib.UInt_max, 2));
  const v43 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:36:23:decimal', stdlib.UInt_max, 0));
  const v44 = [stdlib.checkedBigNumberify('./index.rsh:36:27:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:36:29:decimal', stdlib.UInt_max, 2)];
  const v45 = [stdlib.checkedBigNumberify('./index.rsh:37:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:37:17:decimal', stdlib.UInt_max, 1)];
  const v46 = v43 ? v44 : v45;
  const v47 = [stdlib.checkedBigNumberify('./index.rsh:35:27:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:35:29:decimal', stdlib.UInt_max, 0)];
  const v48 = v42 ? v47 : v46;
  const v49 = v48[stdlib.checkedBigNumberify('./index.rsh:34:12:array', stdlib.UInt_max, 0)];
  const v50 = v48[stdlib.checkedBigNumberify('./index.rsh:34:12:array', stdlib.UInt_max, 1)];
  const v51 = stdlib.mul(v49, v25);
  ;
  const v56 = stdlib.mul(v50, v25);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v41), {
    at: './index.rsh:43:28:application',
    fs: ['at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:23:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  return;
  
  
  };
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc0]);
  
  
  const v19 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc0], false, false));
  const [v25, v26] = txn1.data;
  const v29 = txn1.time;
  const v24 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v25), {
    at: './index.rsh:28:29:application',
    fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v33 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:29:50:application',
    fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  const txn2 = await (ctc.sendrecv(2, 1, stdlib.checkedBigNumberify('./index.rsh:30:9:dot', stdlib.UInt_max, 3), [ctc3, ctc0, ctc0, ctc0, ctc0], [v24, v25, v26, v29, v33], [v25, []], [ctc0], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:30:9:dot', stdlib.UInt_max, 1), v24, v25, v26, v29]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:30:9:dot', stdlib.UInt_max, 1), v24, v25, v26]);
    const [v35] = txn2.data;
    const v38 = txn2.time;
    const v34 = txn2.from;
    
    sim_r.txns.push({
      amt: v25,
      kind: 'to',
      tok: undefined
      });
    const v39 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:33:33:decimal', stdlib.UInt_max, 4), v35);
    const v40 = stdlib.add(v26, v39);
    const v41 = stdlib.mod(v40, stdlib.checkedBigNumberify('./index.rsh:33:47:decimal', stdlib.UInt_max, 3));
    const v42 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:35:23:decimal', stdlib.UInt_max, 2));
    const v43 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:36:23:decimal', stdlib.UInt_max, 0));
    const v44 = [stdlib.checkedBigNumberify('./index.rsh:36:27:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:36:29:decimal', stdlib.UInt_max, 2)];
    const v45 = [stdlib.checkedBigNumberify('./index.rsh:37:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:37:17:decimal', stdlib.UInt_max, 1)];
    const v46 = v43 ? v44 : v45;
    const v47 = [stdlib.checkedBigNumberify('./index.rsh:35:27:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:35:29:decimal', stdlib.UInt_max, 0)];
    const v48 = v42 ? v47 : v46;
    const v49 = v48[stdlib.checkedBigNumberify('./index.rsh:34:12:array', stdlib.UInt_max, 0)];
    const v50 = v48[stdlib.checkedBigNumberify('./index.rsh:34:12:array', stdlib.UInt_max, 1)];
    const v51 = stdlib.mul(v49, v25);
    sim_r.txns.push({
      amt: v51,
      kind: 'from',
      to: v24,
      tok: undefined
      });
    const v56 = stdlib.mul(v50, v25);
    sim_r.txns.push({
      amt: v56,
      kind: 'from',
      to: v34,
      tok: undefined
      });
    sim_r.txns.push({
      kind: 'halt',
      tok: undefined
      })
    sim_r.nextSt = stdlib.digest(ctc2, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc2, []);
    sim_r.isHalt = true;
    
    return sim_r;
    })));
  const [v35] = txn2.data;
  const v38 = txn2.time;
  const v34 = txn2.from;
  ;
  const v39 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:33:33:decimal', stdlib.UInt_max, 4), v35);
  const v40 = stdlib.add(v26, v39);
  const v41 = stdlib.mod(v40, stdlib.checkedBigNumberify('./index.rsh:33:47:decimal', stdlib.UInt_max, 3));
  const v42 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:35:23:decimal', stdlib.UInt_max, 2));
  const v43 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:36:23:decimal', stdlib.UInt_max, 0));
  const v44 = [stdlib.checkedBigNumberify('./index.rsh:36:27:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:36:29:decimal', stdlib.UInt_max, 2)];
  const v45 = [stdlib.checkedBigNumberify('./index.rsh:37:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:37:17:decimal', stdlib.UInt_max, 1)];
  const v46 = v43 ? v44 : v45;
  const v47 = [stdlib.checkedBigNumberify('./index.rsh:35:27:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:35:29:decimal', stdlib.UInt_max, 0)];
  const v48 = v42 ? v47 : v46;
  const v49 = v48[stdlib.checkedBigNumberify('./index.rsh:34:12:array', stdlib.UInt_max, 0)];
  const v50 = v48[stdlib.checkedBigNumberify('./index.rsh:34:12:array', stdlib.UInt_max, 1)];
  const v51 = stdlib.mul(v49, v25);
  ;
  const v56 = stdlib.mul(v50, v25);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v41), {
    at: './index.rsh:43:28:application',
    fs: ['at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:23:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  return;
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 2
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [0, 97, 137],
  steps: [null, `#pragma version 3
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 7
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// CheckPay
// "./index.rsh:23:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 5
btoi
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// CheckPay
// "./index.rsh:30:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 6
btoi
==
assert
gtxna 0 ApplicationArgs 7
btoi
int 4
gtxna 0 ApplicationArgs 8
btoi
-
+
int 3
%
store 255
int 1
itob
int 1
itob
concat
int 0
itob
int 2
itob
concat
load 255
int 0
==
select
int 2
itob
int 0
itob
concat
load 255
int 2
==
select
store 254
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
load 254
substring 0 8
btoi
gtxna 0 ApplicationArgs 6
btoi
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
gtxn 0 Sender
==
assert
gtxn 5 Amount
load 254
substring 8 16
btoi
gtxna 0 ApplicationArgs 6
btoi
*
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 6 Amount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 7
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v35",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v35",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610582806100826000396000f3fe60806040526004361061002d5760003560e01c806310f48adc14610039578063f8b47d281461004e57610034565b3661003457005b600080fd5b61004c61004736600461043a565b610061565b005b61004c61005c366004610451565b61019c565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461009e57600080fd5b60008055346020820135146100b257600080fd5b604080518235815260208084013590820152828201358183015290517f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e99181900360600190a161012c604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338152602082810135818301908152604093840135848401908152436060808601918252865160018187015295516001600160a01b0316868801529251928501929092525160808401525160a0808401919091528351808403909101815260c09092019092528051910120600055565b6040516101b09060019083906020016104b4565b6040516020818303038152906040528051906020012060001c600054146101d657600080fd5b600080556101e2610363565b346020830135146101f257600080fd5b6003610203608084013560046104ff565b6102119060408501356104c8565b61021b9190610516565b81526020808201805160009081905290516002908301819052604084018051600190819052905184015260608401805182905251909201528151146102765780511561026b578060400151610271565b80602001515b61027c565b80606001515b608082015261028e6020830183610419565b6001600160a01b03166108fc83600001602001358360800151600001516102b591906104e0565b6040518115909202916000818181858888f193505050501580156102dd573d6000803e3d6000fd5b50608081015160209081015133916108fc916102fc91860135906104e0565b6040518115909202916000818181858888f19350505050158015610324573d6000803e3d6000fd5b507f3d50dcd356cf06513a3ed94bba250a340c25477d414d97268154f2733f09cf6b826040516103549190610498565b60405180910390a16000805533ff5b6040518060a0016040528060008152602001610392604051806040016040528060008152602001600081525090565b81526020016103b4604051806040016040528060008152602001600081525090565b81526020016103d6604051806040016040528060008152602001600081525090565b81526020016103f8604051806040016040528060008152602001600081525090565b905290565b80356001600160a01b038116811461041457600080fd5b919050565b60006020828403121561042a578081fd5b610433826103fd565b9392505050565b60006060828403121561044b578081fd5b50919050565b600060a0828403121561044b578081fd5b6001600160a01b03610473826103fd565b1682526020810135602083015260408101356040830152606081013560608301525050565b60a081016104a68284610462565b608092830135919092015290565b82815260a081016104336020830184610462565b600082198211156104db576104db610536565b500190565b60008160001904831182151516156104fa576104fa610536565b500290565b60008282101561051157610511610536565b500390565b60008261053157634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d0e762b9099bc9b39a1384f2bfc3f209878a45ec87b9277de484b031c124653264736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

