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
    infos: {
      },
    views: {
      }
    };
  };

export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc2, ctc0, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc2, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc2, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc5, ctc0]);
  
  
  const v50 = await ctc.creationTime();
  const v49 = stdlib.protect(ctc0, interact.wager, null);
  
  
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:44:9:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v50, v49], [v49, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc1, [stdlib.checkedBigNumberify('./index.rsh:44:9:dot', stdlib.UInt_max, 0), v50]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:44:9:dot', stdlib.UInt_max, 0)]);
    const [v55] = txn1.data;
    const v58 = txn1.time;
    const v54 = txn1.from;
    
    sim_r.txns.push({
      amt: v55,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:46:15:after expr stmt semicolon', stdlib.UInt_max, 1), v54, v55, v58]);
    sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:46:15:after expr stmt semicolon', stdlib.UInt_max, 1), v54, v55]);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:46:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v55] = txn1.data;
  const v58 = txn1.time;
  const v54 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 30)));
  if (txn2.didTimeout) {
    
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), [ctc5, ctc0, ctc0], [v54, v55, v58], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v54, v55, v58]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v54, v55]);
      const [] = txn3.data;
      const v196 = txn3.time;
      const v193 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v195 = stdlib.addressEq(v54, v193);
      stdlib.assert(v195, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      sim_r.txns.push({
        amt: v55,
        kind: 'from',
        to: v54,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc8, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn3.data;
    const v196 = txn3.time;
    const v193 = txn3.from;
    ;
    const v195 = stdlib.addressEq(v54, v193);
    stdlib.assert(v195, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:40:33:application',
      fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v65 = txn2.time;
    const v62 = txn2.from;
    const v64 = stdlib.add(v55, v55);
    ;
    let v66 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v211 = v65;
    let v213 = v64;
    
    while ((() => {
      const v76 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v76;})()) {
      const v80 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:59:42:application',
        fs: ['at ./index.rsh:58:15:application call to [unknown function] (defined at: ./index.rsh:58:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v82 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:60:52:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:58:15:application call to [unknown function] (defined at: ./index.rsh:58:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v83 = stdlib.digest(ctc1, [v82, v80]);
      
      
      const txn3 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:62:11:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc5, ctc0, ctc0, ctc2], [v54, v55, v62, v211, v213, v83], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 30), (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:62:11:dot', stdlib.UInt_max, 4), v54, v55, v62, v211, v213]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:62:11:dot', stdlib.UInt_max, 4), v54, v55, v62, v213]);
        const [v86] = txn3.data;
        const v89 = txn3.time;
        const v85 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v88 = stdlib.addressEq(v54, v85);
        stdlib.assert(v88, {
          at: './index.rsh:62:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:64:17:after expr stmt semicolon', stdlib.UInt_max, 6), v54, v55, v62, v86, v89, v213]);
        sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:64:17:after expr stmt semicolon', stdlib.UInt_max, 6), v54, v55, v62, v86, v213]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:64:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv(7, 0, [], false, false));
        const [] = txn4.data;
        const v159 = txn4.time;
        const v156 = txn4.from;
        ;
        const v158 = stdlib.addressEq(v62, v156);
        stdlib.assert(v158, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:40:33:application',
          fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const [v86] = txn3.data;
        const v89 = txn3.time;
        const v85 = txn3.from;
        ;
        const v88 = stdlib.addressEq(v54, v85);
        stdlib.assert(v88, {
          at: './index.rsh:62:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const txn4 = await (ctc.recv(8, 1, [ctc0], false, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 30)));
        if (txn4.didTimeout) {
          
          const txn5 = await (ctc.sendrecv(9, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), [ctc5, ctc0, ctc5, ctc2, ctc0, ctc0], [v54, v55, v62, v86, v89, v213], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn5) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v54, v55, v62, v86, v89, v213]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v54, v55, v62, v86, v213]);
            const [] = txn5.data;
            const v140 = txn5.time;
            const v137 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v139 = stdlib.addressEq(v54, v137);
            stdlib.assert(v139, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            sim_r.txns.push({
              amt: v213,
              kind: 'from',
              to: v54,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            
            return sim_r;
            })));
          const [] = txn5.data;
          const v140 = txn5.time;
          const v137 = txn5.from;
          ;
          const v139 = stdlib.addressEq(v54, v137);
          stdlib.assert(v139, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:40:33:application',
            fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          }
        else {
          const [v95] = txn4.data;
          const v98 = txn4.time;
          const v94 = txn4.from;
          ;
          const v97 = stdlib.addressEq(v62, v94);
          stdlib.assert(v97, {
            at: './index.rsh:69:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          
          
          const txn5 = await (ctc.sendrecv(10, 2, stdlib.checkedBigNumberify('./index.rsh:75:11:dot', stdlib.UInt_max, 5), [ctc5, ctc0, ctc5, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0], [v54, v55, v62, v86, v95, v98, v213, v82, v80], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 30), (async (txn5) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:75:11:dot', stdlib.UInt_max, 8), v54, v55, v62, v86, v95, v98, v213]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:75:11:dot', stdlib.UInt_max, 8), v54, v55, v62, v86, v95, v213]);
            const [v103, v104] = txn5.data;
            const v107 = txn5.time;
            const v102 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v106 = stdlib.addressEq(v54, v102);
            stdlib.assert(v106, {
              at: './index.rsh:75:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v109 = stdlib.digest(ctc1, [v103, v104]);
            const v110 = stdlib.digestEq(v86, v109);
            stdlib.assert(v110, {
              at: 'reach standard library:65:17:application',
              fs: ['at ./index.rsh:77:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v113 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v95);
            const v114 = stdlib.add(v104, v113);
            const v115 = stdlib.mod(v114, stdlib.checkedBigNumberify('./index.rsh:7:32:decimal', stdlib.UInt_max, 3));
            const cv66 = v115;
            const cv211 = v107;
            const cv213 = v213;
            
            (() => {
              const v66 = cv66;
              const v211 = cv211;
              const v213 = cv213;
              
              if ((() => {
                const v76 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                
                return v76;})()) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 4), v54, v55, v62, v211, v213]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 4), v54, v55, v62, v213]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = false;
                }
              else {
                const v174 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                const v177 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:83:16:decimal', stdlib.UInt_max, 2), v55);
                const v179 = v174 ? v54 : v62;
                sim_r.txns.push({
                  amt: v177,
                  kind: 'from',
                  to: v179,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc8, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:84:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = true;
                }})();
            return sim_r;
            })));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv(11, 0, [], false, false));
            const [] = txn6.data;
            const v121 = txn6.time;
            const v118 = txn6.from;
            ;
            const v120 = stdlib.addressEq(v62, v118);
            stdlib.assert(v120, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:40:33:application',
              fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            }
          else {
            const [v103, v104] = txn5.data;
            const v107 = txn5.time;
            const v102 = txn5.from;
            ;
            const v106 = stdlib.addressEq(v54, v102);
            stdlib.assert(v106, {
              at: './index.rsh:75:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v109 = stdlib.digest(ctc1, [v103, v104]);
            const v110 = stdlib.digestEq(v86, v109);
            stdlib.assert(v110, {
              at: 'reach standard library:65:17:application',
              fs: ['at ./index.rsh:77:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v113 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v95);
            const v114 = stdlib.add(v104, v113);
            const v115 = stdlib.mod(v114, stdlib.checkedBigNumberify('./index.rsh:7:32:decimal', stdlib.UInt_max, 3));
            const cv66 = v115;
            const cv211 = v107;
            const cv213 = v213;
            
            v66 = cv66;
            v211 = cv211;
            v213 = cv213;
            
            continue;}
          }
        }
      }
    const v174 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v177 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:83:16:decimal', stdlib.UInt_max, 2), v55);
    const v179 = v174 ? v54 : v62;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v66), {
      at: './index.rsh:87:28:application',
      fs: ['at ./index.rsh:86:11:application call to [unknown function] (defined at: ./index.rsh:86:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;}
  
  
  };
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  
  
  const v50 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v55] = txn1.data;
  const v58 = txn1.time;
  const v54 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v55), {
    at: './index.rsh:49:29:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:50:9:dot', stdlib.UInt_max, 2), [ctc6, ctc0, ctc0], [v54, v55, v58], [v55, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 30), (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:50:9:dot', stdlib.UInt_max, 1), v54, v55, v58]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:50:9:dot', stdlib.UInt_max, 1), v54, v55]);
    const [] = txn2.data;
    const v65 = txn2.time;
    const v62 = txn2.from;
    
    const v64 = stdlib.add(v55, v55);
    sim_r.txns.push({
      amt: v55,
      kind: 'to',
      tok: undefined
      });
    const v66 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    const v211 = v65;
    const v213 = v64;
    
    if ((() => {
      const v76 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v76;})()) {
      sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 4), v54, v55, v62, v211, v213]);
      sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 4), v54, v55, v62, v213]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v174 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v177 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:83:16:decimal', stdlib.UInt_max, 2), v55);
      const v179 = v174 ? v54 : v62;
      sim_r.txns.push({
        amt: v177,
        kind: 'from',
        to: v179,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc5, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:84:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv(3, 0, [], false, false));
    const [] = txn3.data;
    const v196 = txn3.time;
    const v193 = txn3.from;
    ;
    const v195 = stdlib.addressEq(v54, v193);
    stdlib.assert(v195, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:40:33:application',
      fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v65 = txn2.time;
    const v62 = txn2.from;
    const v64 = stdlib.add(v55, v55);
    ;
    let v66 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v211 = v65;
    let v213 = v64;
    
    while ((() => {
      const v76 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v76;})()) {
      const txn3 = await (ctc.recv(6, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 30)));
      if (txn3.didTimeout) {
        
        const txn4 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), [ctc6, ctc0, ctc6, ctc0, ctc0], [v54, v55, v62, v211, v213], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v54, v55, v62, v211, v213]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v54, v55, v62, v213]);
          const [] = txn4.data;
          const v159 = txn4.time;
          const v156 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v158 = stdlib.addressEq(v62, v156);
          stdlib.assert(v158, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          sim_r.txns.push({
            amt: v213,
            kind: 'from',
            to: v62,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc5, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = true;
          
          return sim_r;
          })));
        const [] = txn4.data;
        const v159 = txn4.time;
        const v156 = txn4.from;
        ;
        const v158 = stdlib.addressEq(v62, v156);
        stdlib.assert(v158, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:40:33:application',
          fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const [v86] = txn3.data;
        const v89 = txn3.time;
        const v85 = txn3.from;
        ;
        const v88 = stdlib.addressEq(v54, v85);
        stdlib.assert(v88, {
          at: './index.rsh:62:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v93 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:68:52:application',
          fs: ['at ./index.rsh:67:15:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        
        const txn4 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc2, ctc0, ctc0, ctc0], [v54, v55, v62, v86, v89, v213, v93], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 30), (async (txn4) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, 6), v54, v55, v62, v86, v89, v213]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, 6), v54, v55, v62, v86, v213]);
          const [v95] = txn4.data;
          const v98 = txn4.time;
          const v94 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v97 = stdlib.addressEq(v62, v94);
          stdlib.assert(v97, {
            at: './index.rsh:69:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:71:17:after expr stmt semicolon', stdlib.UInt_max, 8), v54, v55, v62, v86, v95, v98, v213]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:17:after expr stmt semicolon', stdlib.UInt_max, 8), v54, v55, v62, v86, v95, v213]);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:71:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          
          return sim_r;
          })));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv(9, 0, [], false, false));
          const [] = txn5.data;
          const v140 = txn5.time;
          const v137 = txn5.from;
          ;
          const v139 = stdlib.addressEq(v54, v137);
          stdlib.assert(v139, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:40:33:application',
            fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          }
        else {
          const [v95] = txn4.data;
          const v98 = txn4.time;
          const v94 = txn4.from;
          ;
          const v97 = stdlib.addressEq(v62, v94);
          stdlib.assert(v97, {
            at: './index.rsh:69:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const txn5 = await (ctc.recv(10, 2, [ctc0, ctc0], false, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 30)));
          if (txn5.didTimeout) {
            
            const txn6 = await (ctc.sendrecv(11, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc2, ctc0, ctc0, ctc0], [v54, v55, v62, v86, v95, v98, v213], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn6) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v54, v55, v62, v86, v95, v98, v213]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v54, v55, v62, v86, v95, v213]);
              const [] = txn6.data;
              const v121 = txn6.time;
              const v118 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v120 = stdlib.addressEq(v62, v118);
              stdlib.assert(v120, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              sim_r.txns.push({
                amt: v213,
                kind: 'from',
                to: v62,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc5, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc5, []);
              sim_r.view = [ctc4, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = true;
              
              return sim_r;
              })));
            const [] = txn6.data;
            const v121 = txn6.time;
            const v118 = txn6.from;
            ;
            const v120 = stdlib.addressEq(v62, v118);
            stdlib.assert(v120, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:40:33:application',
              fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            }
          else {
            const [v103, v104] = txn5.data;
            const v107 = txn5.time;
            const v102 = txn5.from;
            ;
            const v106 = stdlib.addressEq(v54, v102);
            stdlib.assert(v106, {
              at: './index.rsh:75:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v109 = stdlib.digest(ctc3, [v103, v104]);
            const v110 = stdlib.digestEq(v86, v109);
            stdlib.assert(v110, {
              at: 'reach standard library:65:17:application',
              fs: ['at ./index.rsh:77:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v113 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v95);
            const v114 = stdlib.add(v104, v113);
            const v115 = stdlib.mod(v114, stdlib.checkedBigNumberify('./index.rsh:7:32:decimal', stdlib.UInt_max, 3));
            const cv66 = v115;
            const cv211 = v107;
            const cv213 = v213;
            
            v66 = cv66;
            v211 = cv211;
            v213 = cv213;
            
            continue;}
          }
        }
      }
    const v174 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v177 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:83:16:decimal', stdlib.UInt_max, 2), v55);
    const v179 = v174 ? v54 : v62;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v66), {
      at: './index.rsh:87:28:application',
      fs: ['at ./index.rsh:86:11:application call to [unknown function] (defined at: ./index.rsh:86:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;}
  
  
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
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
gtxn 2 Sender
byte "{{m10}}"
==
||
gtxn 2 Sender
byte "{{m11}}"
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
gtxna 0 ApplicationArgs 5
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
byte base64(dg==)
gtxna 0 ApplicationArgs 2
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
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
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
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
byte base64(dg==)
byte base64()
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
  stepargs: [null, {
    count: 7,
    size: 97
    }, {
    count: 8,
    size: 129
    }, {
    count: 8,
    size: 129
    }, null, null, {
    count: 11,
    size: 201
    }, {
    count: 10,
    size: 169
    }, {
    count: 12,
    size: 209
    }, {
    count: 11,
    size: 201
    }, {
    count: 14,
    size: 225
    }, {
    count: 12,
    size: 209
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
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
// "CheckPay"
// "./index.rsh:44:9:dot"
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
gtxna 0 ApplicationArgs 4
btoi
-
load 255
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
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
int 8
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
load 255
concat
load 254
itob
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
// "CheckPay"
// "./index.rsh:50:9:dot"
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
gtxna 0 ApplicationArgs 4
btoi
-
load 254
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
int 1
int 1
==
bz l0
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
gtxn 0 Sender
concat
load 254
load 254
+
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 30
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
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxn 0 Sender
load 255
int 1
int 2
==
select
==
assert
gtxn 4 Amount
int 2
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 30
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
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
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
int 8
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
load 255
concat
load 254
itob
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
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:51:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:51:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 30
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
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
store 251
// Handler 6
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
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
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
// "CheckPay"
// "./index.rsh:62:11:dot"
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:62:11:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 251
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 30
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
// Handler 7
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
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
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
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:63:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:63:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 252
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 30
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
// Handler 8
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
int 12
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
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
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
// "CheckPay"
// "./index.rsh:69:11:dot"
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:69:11:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 250
itob
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 30
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
// Handler 9
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
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
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
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:70:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:70:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 251
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 30
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
// Handler 10
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
int 14
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
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
load 250
itob
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
// "CheckPay"
// "./index.rsh:75:11:dot"
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:75:11:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:77:24:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 252
load 249
itob
load 248
itob
concat
keccak256
==
assert
load 248
int 4
load 251
-
+
int 3
%
dup
store 247
int 1
==
bz l0
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 30
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
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
load 255
load 247
int 2
==
select
==
assert
gtxn 4 Amount
int 2
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 30
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
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
// Handler 11
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
int 12
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
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
load 250
itob
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
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:76:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:76:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 250
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 30
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
                "name": "v55",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v103",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v104",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
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
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
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
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
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
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
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
                "name": "v55",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v103",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v104",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
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
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556112fb806100826000396000f3fe60806040526004361061008a5760003560e01c80639532ef01116100595780639532ef01146100e4578063b32a639f146100f7578063b861cb101461010a578063dc0f106b1461011d578063e163d7c41461013057610091565b80632438df70146100965780634188e022146100ab5780636cc4a844146100be5780636dacfd6f146100d157610091565b3661009157005b600080fd5b6100a96100a4366004610f96565b610143565b005b6100a96100b9366004610f46565b61024b565b6100a96100cc366004610f2b565b610357565b6100a96100df366004610f46565b610528565b6100a96100f2366004610f85565b6106fe565b6100a9610105366004610f73565b610800565b6100a9610118366004610f2b565b610903565b6100a961012b366004610f61565b610a06565b6100a961013e366004610f96565b610ba8565b604051610157906001908390602001611219565b6040516020818303038152906040528051906020012060001c6000541461017d57600080fd5b60008055610190601e6040830135611241565b431061019b57600080fd5b346020820135146101ab57600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516101da91906111c0565b60405180910390a16101ea610e74565b6101f76020830183610f0a565b81516001600160a01b039091169052805160208084013591810182905282513360409091015280830180516001905251439101526102359080611241565b60208201516040015261024781610ca5565b5050565b60405161025f9060069083906020016111f0565b6040516020818303038152906040528051906020012060001c6000541461028557600080fd5b60008055610298601e6080830135611241565b4310156102a457600080fd5b34156102af57600080fd5b336102bd6020830183610f0a565b6001600160a01b0316146102d057600080fd5b6102dd6020820182610f0a565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f19350505050158015610318573d6000803e3d6000fd5b507fe30737f1ebfc963c65c5913e78ab44df878e431e05d360e374cda18b462b262b816040516103489190611134565b60405180910390a16000805533ff5b60405161036b90600490839060200161122d565b6040516020818303038152906040528051906020012060001c6000541461039157600080fd5b600080556103a4601e6060830135611241565b43106103af57600080fd5b34156103ba57600080fd5b336103c86020830183610f0a565b6001600160a01b0316146103db57600080fd5b7f16424d059cabc243859f670786693b7e657c3f04cbc39631fa14608999bfaef98160405161040a91906110cc565b60405180910390a161045d6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b61046a6020830183610f0a565b6001600160a01b031681526020808301359082015261048f6060830160408401610f0a565b6001600160a01b03908116604083810191825260a0858101356060808701918252436080808901918252808a0135858a01908152865160066020808301919091528b518b1698820198909852968a0151938701939093529551909616948401949094525190820152915160c08301525160e0820152610100015b60408051601f1981840301815291905280516020909101206000555050565b60405161053c9060069083906020016111f0565b6040516020818303038152906040528051906020012060001c6000541461056257600080fd5b60008055610575601e6080830135611241565b431061058057600080fd5b341561058b57600080fd5b3361059c6060830160408401610f0a565b6001600160a01b0316146105af57600080fd5b7fa03e2b199cbd4c163bca89aa8e3581bcf82ee511c6ed7b600ee5e8a3e78842b4816040516105de9190611118565b60405180910390a16106386040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6106456020830183610f0a565b6001600160a01b031681526020808301359082015261066a6060830160408401610f0a565b6001600160a01b03908116604083810191825260608581013581860190815260c08088013560808089019182524360a0808b01918252808c0135858c01908152885160086020808301919091528d518d169a82019a909a52988c0151978901979097529751909816908601529151948401949094525192820192909252915160e08301525161010082015261012001610509565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461073b57600080fd5b600080553460208201351461074f57600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a16107b9604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a001610509565b604051610814906008908390602001611204565b6040516020818303038152906040528051906020012060001c6000541461083a57600080fd5b6000805561084d601e60a0830135611241565b43101561085957600080fd5b341561086457600080fd5b336108756060830160408401610f0a565b6001600160a01b03161461088857600080fd5b6108986060820160408301610f0a565b6040516001600160a01b03919091169060c083013580156108fc02916000818181858888f193505050501580156108d3573d6000803e3d6000fd5b507fe7cd06eed96e73ebf1eef9fa7a8d285d298aa9f119f81a14f729b421ad209bfa81604051610348919061118f565b60405161091790600490839060200161122d565b6040516020818303038152906040528051906020012060001c6000541461093d57600080fd5b60008055610950601e6060830135611241565b43101561095c57600080fd5b341561096757600080fd5b336109786060830160408401610f0a565b6001600160a01b03161461098b57600080fd5b61099b6060820160408301610f0a565b6040516001600160a01b039190911690608083013580156108fc02916000818181858888f193505050501580156109d6573d6000803e3d6000fd5b507f5005c4e6004c19e98ada43b5f5d05731c1a82aa5d9215871f88ceb584e0f83e08160405161034891906110e8565b604051610a1a906008908390602001611204565b6040516020818303038152906040528051906020012060001c60005414610a4057600080fd5b60008055610a53601e60a0830135611241565b4310610a5e57600080fd5b3415610a6957600080fd5b33610a776020830183610f0a565b6001600160a01b031614610a8a57600080fd5b6040805160e083013560208201526101008301359181019190915260600160408051601f198184030181529190528051602090910120606082013514610acf57600080fd5b7f352ea7fc48371f0bd43d7d1ad042d3e6a673947e2deccddfd368812813abc47281604051610afe9190611164565b60405180910390a1610b0e610e74565b610b1b6020830183610f0a565b81516001600160a01b0390911690528051602080840135910152610b456060830160408401610f0a565b81516001600160a01b039091166040909101526003610b6960808401356004611278565b610b7890610100850135611241565b610b82919061128f565b60208083018051929092528151439101525160c083013560409091015261024781610ca5565b604051610bbc906001908390602001611219565b6040516020818303038152906040528051906020012060001c60005414610be257600080fd5b60008055610bf5601e6040830135611241565b431015610c0157600080fd5b3415610c0c57600080fd5b33610c1a6020830183610f0a565b6001600160a01b031614610c2d57600080fd5b610c3a6020820182610f0a565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610c75573d6000803e3d6000fd5b507fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d856230138160405161034891906111c0565b60208101515160011415610d9c57610cf76040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401908152845160409081015184168186019081528387018051850151606080890191825291518401516080808a0191825285516004988101989098528951891695880195909552945191860191909152905190941690830152915160a0820152905160c082015260e00160408051601f19818403018152919052805160209091012060005550610e04565b6040805160c0810182526000818301818152606083018281526080840183815260a085018481528386526020808701959095528751516001600160a01b0390811690945287518501519092528651909501519091169093528301515190915261024781610e07565b50565b805160600151600214610e1f57805160400151610e23565b8051515b6001600160a01b03166108fc8260000151602001516002610e449190611259565b6040518115909202916000818181858888f19350505050158015610e6c573d6000803e3d6000fd5b506000805533ff5b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610ec160405180606001604052806000815260200160008152602001600081525090565b905290565b80356001600160a01b0381168114610edd57600080fd5b919050565b600060c08284031215610ef3578081fd5b50919050565b600060e08284031215610ef3578081fd5b600060208284031215610f1b578081fd5b610f2482610ec6565b9392505050565b600060c08284031215610f3c578081fd5b610f248383610ee2565b600060e08284031215610f57578081fd5b610f248383610ef9565b60006101208284031215610ef3578081fd5b60006101008284031215610ef3578081fd5b600060408284031215610ef3578081fd5b600060808284031215610ef3578081fd5b6001600160a01b0380610fb983610ec6565b1683526020820135602084015280610fd360408401610ec6565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b038061100e83610ec6565b168352602082013560208401528061102860408401610ec6565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b0361106c82610ec6565b16825260208181013590830152604090810135910152565b6001600160a01b038061109683610ec6565b16835260208201356020840152806110b060408401610ec6565b1660408401525060608181013590830152608090810135910152565b60c081016110da8284611084565b60a092830135919092015290565b60c081016110f68284611084565b60a083013580151580821461110a57600080fd5b8060a0850152505092915050565b60e081016111268284610fa7565b60c092830135919092015290565b60e081016111428284610fa7565b60c083013580151580821461115657600080fd5b8060c0850152505092915050565b61012081016111738284610ffc565b60e083013560e083015261010080840135818401525092915050565b610100810161119e8284610ffc565b60e08301358015158082146111b257600080fd5b8060e0850152505092915050565b608081016111ce828461105b565b60608301358015158082146111e257600080fd5b806060850152505092915050565b82815260e08101610f246020830184610fa7565b8281526101008101610f246020830184610ffc565b82815260808101610f24602083018461105b565b82815260c08101610f246020830184611084565b60008219821115611254576112546112af565b500190565b6000816000190483118215151615611273576112736112af565b500290565b60008282101561128a5761128a6112af565b500390565b6000826112aa57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220cebca2b4ee43831356ef5f881e2c284e2b300c65287e296fb1e8f7c7528e783864736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

