#!/bin/bash
sed -e 's/,function(window,document,Laya){.*$//' main_001357.js > 1.js
sed -e 's/^.*,function(window,document,Laya){/__a=1,function(window,document,Laya){/'  main_001357.js >2.js
sed -i 's/var BaseAction/BaseAction/' 2.js 
sed -i 's/FG.mainConnecter.send(t/window.HookSendMsg\&\&window.HookSendMsg(t,e)\&\&FG.mainConnecter.send(t/' 2.js
sed -i 's/s.setMessage(i)/window.HookRecvMsg\&\&window.HookRecvMsg(t,i,s)\&\&s.setMessage(i)/' 2.js
# sed -i 's/}(window,document,Laya)/})(window,document,Laya)/' 2.js

