<h1>Git</h1>
<h2>基本操作</h2>
<p><b>$git pull</b> :從遠端倉庫拉資料</p>
  
<p><b>$git add</b> :將自己的修改加到緩存中</p>

<p><b>$git commit</b> :將緩存中的修改提交到本地倉庫</p>

<p><b>$git commit -m "你修改ㄉ東西"</b> :再提交緩存修改時，寫相關註解</p>
  
<p><b>$git push</b> :將本地倉庫的修改推到github遠程倉庫上</p>
  
<p><b>絕對絕對絕對不要用強制push的指令</b></p>

<h2>關於merge</h2>
<p><b>若要把test的東西update進main</b></p>

<p><b>第一步: 把branch切換到main裡面(若已在main裡則不用換)</b></p>
<p>$git checkout main</p>

<p><b>第二步: merge</b></p>
<p>$git merge test</p>

<p><b>第三步: 將東西推上遠端倉庫</b></p>
<p>$git push</p>

