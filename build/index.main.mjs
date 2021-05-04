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
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc2, ctc5, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc2, ctc5, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc2, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc2, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0]);
  
  
  const v50 = await ctc.creationTime();
  const v49 = stdlib.protect(ctc0, interact.wager, null);
  const v54 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:46:39:application',
    fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v56 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:60:31:application',
    fs: ['at ./index.rsh:47:49:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v57 = stdlib.digest(ctc1, [v56, v54]);
  const txn1 = await (ctc.sendrecv(1, 2, stdlib.checkedBigNumberify('./index.rsh:49:9:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc2], [v50, v49, v57], [v49, []], [ctc0, ctc2], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc1, [stdlib.checkedBigNumberify('./index.rsh:49:9:dot', stdlib.UInt_max, 0), v50]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:49:9:dot', stdlib.UInt_max, 0)]);
    const [v60, v61] = txn1.data;
    const v64 = txn1.time;
    const v59 = txn1.from;
    
    const v63 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v60);
    sim_r.txns.push({
      amt: v60,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:51:15:after expr stmt semicolon', stdlib.UInt_max, 1), v59, v60, v61, v63, v64]);
    sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:51:15:after expr stmt semicolon', stdlib.UInt_max, 1), v59, v60, v61, v63]);
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v60, v61] = txn1.data;
  const v64 = txn1.time;
  const v59 = txn1.from;
  const v63 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v60);
  ;
  const txn2 = await (ctc.recv(2, 1, [ctc0], false, stdlib.checkedBigNumberify('./index.rsh:34:18:decimal', stdlib.UInt_max, 10)));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), [ctc5, ctc0, ctc2, ctc0, ctc0], [v59, v60, v61, v63, v64], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v59, v60, v61, v63, v64]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v59, v60, v61, v63]);
      const [] = txn3.data;
      const v145 = txn3.time;
      const v141 = txn3.from;
      
      const v143 = stdlib.add(v63, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v144 = stdlib.addressEq(v59, v141);
      stdlib.assert(v144, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      sim_r.txns.push({
        amt: v143,
        kind: 'from',
        to: v59,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc4, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn3.data;
    const v145 = txn3.time;
    const v141 = txn3.from;
    const v143 = stdlib.add(v63, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    ;
    const v144 = stdlib.addressEq(v59, v141);
    stdlib.assert(v144, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:42:33:application',
      fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:31:function exp)', 'at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    return;
    }
  else {
    const [v70] = txn2.data;
    const v73 = txn2.time;
    const v69 = txn2.from;
    const v72 = stdlib.add(v63, v60);
    ;
    const txn3 = await (ctc.sendrecv(4, 2, stdlib.checkedBigNumberify('./index.rsh:64:9:dot', stdlib.UInt_max, 6), [ctc5, ctc0, ctc2, ctc5, ctc0, ctc0, ctc0, ctc0, ctc0], [v59, v60, v61, v69, v70, v72, v73, v56, v54], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:34:18:decimal', stdlib.UInt_max, 10), (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:64:9:dot', stdlib.UInt_max, 2), v59, v60, v61, v69, v70, v72, v73]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:64:9:dot', stdlib.UInt_max, 2), v59, v60, v61, v69, v70, v72]);
      const [v78, v79] = txn3.data;
      const v83 = txn3.time;
      const v77 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v82 = stdlib.addressEq(v59, v77);
      stdlib.assert(v82, {
        at: './index.rsh:64:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v85 = stdlib.digest(ctc1, [v78, v79]);
      const v86 = stdlib.digestEq(v61, v85);
      stdlib.assert(v86, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./index.rsh:66:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v89 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v70);
      const v90 = stdlib.add(v79, v89);
      const v91 = stdlib.mod(v90, stdlib.checkedBigNumberify('./index.rsh:7:29:decimal', stdlib.UInt_max, 3));
      const v93 = stdlib.eq(v91, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v94 = stdlib.eq(v91, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v95 = [stdlib.checkedBigNumberify('./index.rsh:75:34:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:75:36:decimal', stdlib.UInt_max, 2)];
      const v96 = [stdlib.checkedBigNumberify('./index.rsh:76:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:76:17:decimal', stdlib.UInt_max, 1)];
      const v97 = v94 ? v95 : v96;
      const v98 = [stdlib.checkedBigNumberify('./index.rsh:74:34:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:74:36:decimal', stdlib.UInt_max, 0)];
      const v99 = v93 ? v98 : v97;
      const v100 = v99[stdlib.checkedBigNumberify('./index.rsh:72:12:array', stdlib.UInt_max, 0)];
      const v101 = v99[stdlib.checkedBigNumberify('./index.rsh:72:12:array', stdlib.UInt_max, 1)];
      const v102 = stdlib.mul(v100, v60);
      sim_r.txns.push({
        amt: v102,
        kind: 'from',
        to: v59,
        tok: undefined
        });
      const v107 = stdlib.mul(v101, v60);
      sim_r.txns.push({
        amt: v107,
        kind: 'from',
        to: v69,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc4, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv(5, 0, [], false, false));
      const [] = txn4.data;
      const v125 = txn4.time;
      const v121 = txn4.from;
      const v123 = stdlib.add(v72, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      ;
      const v124 = stdlib.addressEq(v69, v121);
      stdlib.assert(v124, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:65:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:42:33:application',
        fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:31:function exp)', 'at ./index.rsh:65:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      return;
      }
    else {
      const [v78, v79] = txn3.data;
      const v83 = txn3.time;
      const v77 = txn3.from;
      ;
      const v82 = stdlib.addressEq(v59, v77);
      stdlib.assert(v82, {
        at: './index.rsh:64:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v85 = stdlib.digest(ctc1, [v78, v79]);
      const v86 = stdlib.digestEq(v61, v85);
      stdlib.assert(v86, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./index.rsh:66:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v89 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v70);
      const v90 = stdlib.add(v79, v89);
      const v91 = stdlib.mod(v90, stdlib.checkedBigNumberify('./index.rsh:7:29:decimal', stdlib.UInt_max, 3));
      const v93 = stdlib.eq(v91, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v94 = stdlib.eq(v91, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v95 = [stdlib.checkedBigNumberify('./index.rsh:75:34:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:75:36:decimal', stdlib.UInt_max, 2)];
      const v96 = [stdlib.checkedBigNumberify('./index.rsh:76:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:76:17:decimal', stdlib.UInt_max, 1)];
      const v97 = v94 ? v95 : v96;
      const v98 = [stdlib.checkedBigNumberify('./index.rsh:74:34:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:74:36:decimal', stdlib.UInt_max, 0)];
      const v99 = v93 ? v98 : v97;
      const v100 = v99[stdlib.checkedBigNumberify('./index.rsh:72:12:array', stdlib.UInt_max, 0)];
      const v101 = v99[stdlib.checkedBigNumberify('./index.rsh:72:12:array', stdlib.UInt_max, 1)];
      const v102 = stdlib.mul(v100, v60);
      ;
      const v107 = stdlib.mul(v101, v60);
      ;
      stdlib.protect(ctc3, await interact.seeOutcome(v91), {
        at: './index.rsh:82:28:application',
        fs: ['at ./index.rsh:81:11:application call to [unknown function] (defined at: ./index.rsh:81:23:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      return;}
    }
  
  
  };
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc1, ctc5, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc1, ctc5, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc1, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc1, ctc0]);
  
  
  const v50 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc1], false, false));
  const [v60, v61] = txn1.data;
  const v64 = txn1.time;
  const v59 = txn1.from;
  const v63 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v60);
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v60), {
    at: './index.rsh:55:29:application',
    fs: ['at ./index.rsh:54:13:application call to [unknown function] (defined at: ./index.rsh:54:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v68 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:56:50:application',
    fs: ['at ./index.rsh:54:13:application call to [unknown function] (defined at: ./index.rsh:54:17:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  const txn2 = await (ctc.sendrecv(2, 1, stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, 4), [ctc5, ctc0, ctc1, ctc0, ctc0, ctc0], [v59, v60, v61, v63, v64, v68], [v60, []], [ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:34:18:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, 1), v59, v60, v61, v63, v64]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, 1), v59, v60, v61, v63]);
    const [v70] = txn2.data;
    const v73 = txn2.time;
    const v69 = txn2.from;
    
    const v72 = stdlib.add(v63, v60);
    sim_r.txns.push({
      amt: v60,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:60:17:after expr stmt semicolon', stdlib.UInt_max, 2), v59, v60, v61, v69, v70, v72, v73]);
    sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:60:17:after expr stmt semicolon', stdlib.UInt_max, 2), v59, v60, v61, v69, v70, v72]);
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv(3, 0, [], false, false));
    const [] = txn3.data;
    const v145 = txn3.time;
    const v141 = txn3.from;
    const v143 = stdlib.add(v63, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    ;
    const v144 = stdlib.addressEq(v59, v141);
    stdlib.assert(v144, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:42:33:application',
      fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:31:function exp)', 'at ./index.rsh:59:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    return;
    }
  else {
    const [v70] = txn2.data;
    const v73 = txn2.time;
    const v69 = txn2.from;
    const v72 = stdlib.add(v63, v60);
    ;
    const txn3 = await (ctc.recv(4, 2, [ctc0, ctc0], false, stdlib.checkedBigNumberify('./index.rsh:34:18:decimal', stdlib.UInt_max, 10)));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), [ctc5, ctc0, ctc1, ctc5, ctc0, ctc0, ctc0], [v59, v60, v61, v69, v70, v72, v73], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), v59, v60, v61, v69, v70, v72, v73]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), v59, v60, v61, v69, v70, v72]);
        const [] = txn4.data;
        const v125 = txn4.time;
        const v121 = txn4.from;
        
        const v123 = stdlib.add(v72, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v124 = stdlib.addressEq(v69, v121);
        stdlib.assert(v124, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:65:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        sim_r.txns.push({
          amt: v123,
          kind: 'from',
          to: v69,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.nextSt = stdlib.digest(ctc4, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
        sim_r.isHalt = true;
        
        return sim_r;
        })));
      const [] = txn4.data;
      const v125 = txn4.time;
      const v121 = txn4.from;
      const v123 = stdlib.add(v72, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      ;
      const v124 = stdlib.addressEq(v69, v121);
      stdlib.assert(v124, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:65:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:42:33:application',
        fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:24:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:31:function exp)', 'at ./index.rsh:65:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      return;
      }
    else {
      const [v78, v79] = txn3.data;
      const v83 = txn3.time;
      const v77 = txn3.from;
      ;
      const v82 = stdlib.addressEq(v59, v77);
      stdlib.assert(v82, {
        at: './index.rsh:64:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v85 = stdlib.digest(ctc3, [v78, v79]);
      const v86 = stdlib.digestEq(v61, v85);
      stdlib.assert(v86, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./index.rsh:66:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v89 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v70);
      const v90 = stdlib.add(v79, v89);
      const v91 = stdlib.mod(v90, stdlib.checkedBigNumberify('./index.rsh:7:29:decimal', stdlib.UInt_max, 3));
      const v93 = stdlib.eq(v91, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v94 = stdlib.eq(v91, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v95 = [stdlib.checkedBigNumberify('./index.rsh:75:34:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:75:36:decimal', stdlib.UInt_max, 2)];
      const v96 = [stdlib.checkedBigNumberify('./index.rsh:76:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:76:17:decimal', stdlib.UInt_max, 1)];
      const v97 = v94 ? v95 : v96;
      const v98 = [stdlib.checkedBigNumberify('./index.rsh:74:34:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:74:36:decimal', stdlib.UInt_max, 0)];
      const v99 = v93 ? v98 : v97;
      const v100 = v99[stdlib.checkedBigNumberify('./index.rsh:72:12:array', stdlib.UInt_max, 0)];
      const v101 = v99[stdlib.checkedBigNumberify('./index.rsh:72:12:array', stdlib.UInt_max, 1)];
      const v102 = stdlib.mul(v100, v60);
      ;
      const v107 = stdlib.mul(v101, v60);
      ;
      stdlib.protect(ctc2, await interact.seeOutcome(v91), {
        at: './index.rsh:82:28:application',
        fs: ['at ./index.rsh:81:11:application call to [unknown function] (defined at: ./index.rsh:81:23:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      return;}
    }
  
  
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
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
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
  stepargs: [0, 121, 169, 161, 217, 201],
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
int 0
gtxna 0 ApplicationArgs 5
btoi
+
store 255
// CheckPay
// "./index.rsh:49:9:dot"
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
load 255
itob
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
int 10
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
gtxna 0 ApplicationArgs 8
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
gtxna 0 ApplicationArgs 8
btoi
gtxna 0 ApplicationArgs 6
btoi
+
store 255
// CheckPay
// "./index.rsh:57:9:dot"
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
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxn 0 Sender
concat
gtxna 0 ApplicationArgs 9
concat
load 255
itob
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
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 3
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
gtxna 0 ApplicationArgs 8
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
// "reach standard library:209:7:dot"
// "[at ./index.rsh:59:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:59:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 8
btoi
int 0
+
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
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
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
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 4
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
int 13
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
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
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
// "./index.rsh:64:9:dot"
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
int 0
==
assert
// Just "sender correct"
// "./index.rsh:64:9:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:66:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
gtxna 0 ApplicationArgs 7
gtxna 0 ApplicationArgs 11
gtxna 0 ApplicationArgs 12
concat
keccak256
==
assert
gtxna 0 ApplicationArgs 12
btoi
int 4
gtxna 0 ApplicationArgs 9
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
gtxna 0 ApplicationArgs 8
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
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
dup
gtxn 6 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 5
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
int 11
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
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
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
// "reach standard library:209:7:dot"
// "[at ./index.rsh:65:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:65:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxna 0 ApplicationArgs 8
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 8
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 10
btoi
int 0
+
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
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
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
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
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
                "name": "v50",
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
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
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
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
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
                "name": "v70",
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
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
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
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v69",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
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
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v69",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
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
                "name": "v50",
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
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
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
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
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
                "name": "v70",
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
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
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
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v69",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
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
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v69",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610bd7806100826000396000f3fe60806040526004361061004e5760003560e01c8063094e93221461005a57806310f48adc1461006f5780635af07d43146100825780636c57957c14610095578063ab4cea6a146100a857610055565b3661005557005b600080fd5b61006d610068366004610938565b6100bb565b005b61006d61007d36600461095c565b610311565b61006d61009036600461094a565b61047e565b61006d6100a336600461096d565b610589565b61006d6100b636600461096d565b61068e565b6040516100cf906002908390602001610b08565b6040516020818303038152906040528051906020012060001c600054146100f557600080fd5b6000805561010161084a565b610110600a60c0840135610b1d565b431061011b57600080fd5b341561012657600080fd5b336101346020840184610917565b6001600160a01b03161461014757600080fd5b6040805160e084013560208083019190915261010085013582840152825180830384018152606090920183528151910120908301351461018657600080fd5b600361019760808401356004610b54565b6101a690610100850135610b1d565b6101b09190610b6b565b815260208082018051600090819052905160029083018190526040840180516001908190529051840152606084018051829052519092015281511461020b57805115610200578060400151610206565b80602001515b610211565b80606001515b60808201526102236020830183610917565b6001600160a01b03166108fc836000016020013583608001516000015161024a9190610b35565b6040518115909202916000818181858888f19350505050158015610272573d6000803e3d6000fd5b506102836080830160608401610917565b6001600160a01b03166108fc83600001602001358360800151602001516102aa9190610b35565b6040518115909202916000818181858888f193505050501580156102d2573d6000803e3d6000fd5b507fa20a4944553f949fa841daf77ed38ceda271fdf9bbd649299232e0a23923ec60826040516103029190610a27565b60405180910390a16000805533ff5b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461034e57600080fd5b6000808055604080516020810190915290815261037060208301356000610b1d565b81523460208301351461038257600080fd5b7f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e9826040516103b19190610a87565b60405180910390a16103f46040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b33815260208381013581830190815260408086013581850190815285516060808701918252436080808901918252855160019881019890985288516001600160a01b0316958801959095529451908601529051918401919091525160a08301525160c082015260e0015b60408051601f198184030181529190528051602090910120600055505050565b604051610492906002908390602001610b08565b6040516020818303038152906040528051906020012060001c600054146104b857600080fd5b600080556104cb600a60c0830135610b1d565b4310156104d757600080fd5b34156104e257600080fd5b336104f36080830160608401610917565b6001600160a01b03161461050657600080fd5b6105166080820160608301610917565b6001600160a01b03166108fc610531600060a0850135610b1d565b6040518115909202916000818181858888f19350505050158015610559573d6000803e3d6000fd5b507fea2246b88a8dffc64b4b40b0123808de64b5a19ff417165c3463427e398f696e816040516103029190610a56565b60405161059d906001908390602001610af4565b6040516020818303038152906040528051906020012060001c600054146105c357600080fd5b600080556105d6600a6080830135610b1d565b4310156105e257600080fd5b34156105ed57600080fd5b336105fb6020830183610917565b6001600160a01b03161461060e57600080fd5b61061b6020820182610917565b6001600160a01b03166108fc61063660006060850135610b1d565b6040518115909202916000818181858888f1935050505015801561065e573d6000803e3d6000fd5b507f0eacc5172200577ccadf50aa265553cdae8531b07e7711fdd25288ccdefbc960816040516103029190610ac4565b6040516106a2906001908390602001610af4565b6040516020818303038152906040528051906020012060001c600054146106c857600080fd5b600080805560408051602081019091529081526106ea600a6080840135610b1d565b43106106f557600080fd5b61070760208301356060840135610b1d565b81523460208301351461071957600080fd5b7fb2f92fe6c142a534ba59abdd85463065d83c535c88ba2923027ccf2fd09af310826040516107489190610aa8565b60405180910390a16107a26040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6107af6020840184610917565b6001600160a01b03908116825260208481013581840190815260408087013581860190815233606080880191825260a0808b01356080808b019182528b51838c019081524360c0808e01918252895160029c81019c909c528d518d16998c01999099529851948a01949094529451948801949094529151909616908501525190830152915160e082015290516101008201526101200161045e565b6040518060a0016040528060008152602001610879604051806040016040528060008152602001600081525090565b815260200161089b604051806040016040528060008152602001600081525090565b81526020016108bd604051806040016040528060008152602001600081525090565b81526020016108df604051806040016040528060008152602001600081525090565b905290565b80356001600160a01b03811681146108fb57600080fd5b919050565b600060c08284031215610911578081fd5b50919050565b600060208284031215610928578081fd5b610931826108e4565b9392505050565b60006101208284031215610911578081fd5b60006101008284031215610911578081fd5b600060608284031215610911578081fd5b600060c0828403121561097e578081fd5b6109318383610900565b6001600160a01b03610999826108e4565b168252602081013560208301526040810135604083015260608101356060830152608081013560808301525050565b6001600160a01b03806109da836108e4565b1683526020820135602084015260408201356040840152806109fe606084016108e4565b166060840152506080810135608083015260a081013560a083015260c081013560c08301525050565b6101208101610a3682846109c8565b610a5060e0830160e0850180358252602090810135910152565b92915050565b6101008101610a6582846109c8565b60e0830135801515808214610a7957600080fd5b8060e0850152505092915050565b81358152602080830135908201526040808301359082015260608101610a50565b60c08101610ab68284610988565b60a092830135919092015290565b60c08101610ad28284610988565b60a0830135801515808214610ae657600080fd5b8060a0850152505092915050565b82815260c081016109316020830184610988565b828152610100810161093160208301846109c8565b60008219821115610b3057610b30610b8b565b500190565b6000816000190483118215151615610b4f57610b4f610b8b565b500290565b600082821015610b6657610b66610b8b565b500390565b600082610b8657634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea264697066735822122050372774ff47927cc6e592c4e5ceaf6c91e8decc9d02024ecc5543c01520353364736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

