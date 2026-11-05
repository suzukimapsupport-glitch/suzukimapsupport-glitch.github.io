(function(){
var D=window.D;if(!D)return;
var css=":root{--ink:#1d2733;--sub:#5b6773;--line:#d9e1e8;--acc:#17496b;--soft:#eef4f8;--warn:#b3401f;--bg:#ffffff}"+
"*{box-sizing:border-box;margin:0;padding:0}"+
"body{font-family:'Hiragino Sans','Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif;color:var(--ink);background:var(--bg);line-height:1.75;font-size:16px}"+
".w{max-width:680px;margin:0 auto;padding:28px 16px 40px}"+
".top{border-bottom:3px solid var(--acc);padding-bottom:12px}"+
".top small{display:block;color:var(--sub);font-size:12px}"+
"h1{font-size:23px;line-height:1.4;color:var(--acc);margin-top:4px}"+
".lead{background:var(--soft);border-left:5px solid var(--acc);padding:14px 16px;margin:18px 0 6px;font-weight:700;font-size:16.5px;line-height:1.7}"+
"h2{font-size:17px;color:var(--acc);margin:28px 0 10px}"+
".rank{display:flex;gap:10px;flex-wrap:wrap}"+
".rank div{flex:1 1 180px;border:1px solid var(--line);border-radius:8px;padding:12px 14px}"+
".rank b{display:block;font-size:26px;color:var(--warn);line-height:1.3}"+
".rank span{font-size:13px;color:var(--sub)}"+
".good{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px}"+
".good div{border:1px solid var(--line);border-radius:8px;padding:10px 12px}"+
".good b{display:block;font-size:18px;color:var(--acc)}"+
".good span{font-size:13.5px}"+
".gap{border:1px solid var(--line);border-radius:8px;margin-bottom:10px;overflow:hidden}"+
".gap p{padding:9px 13px;font-size:14.5px}"+
".gap p+p{border-top:1px solid var(--line)}"+
".gap .f{background:var(--soft);font-weight:700}"+
".gap em{font-style:normal;font-size:12px;color:var(--sub);display:block;line-height:1.5}"+
".note{font-size:12px;color:var(--sub);margin-top:8px}"+
".offer{margin-top:28px;border:2px solid var(--acc);border-radius:10px;padding:16px}"+
".offer h2{margin:0 0 8px}"+
".offer p{font-size:15px}"+
".offer .c{margin-top:10px;font-size:14px}"+
"footer{margin-top:24px;font-size:12px;color:var(--sub)}"+
"footer a{color:var(--acc)}";
var e=function(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
var h='<div class="w"><div class="top"><small>Googleマップ無料診断　調査日 '+e(D.date)+'</small><h1>'+e(D.name)+' 様</h1></div>';
h+='<p class="lead">'+e(D.lead)+'</p>';
h+='<h2>1. 検索したときの順位（広告を除く）</h2><div class="rank"><div><span>「'+e(D.kw)+'」での貴社</span><b>'+e(D.rank)+'</b></div><div><span>'+e(D.cmpLabel)+'</span><b style="color:var(--acc)">'+e(D.cmp)+'</b></div></div>';
h+='<p class="note">当方の環境で確認した結果です。順位は検索する場所や端末で変わるため、目安としてご覧ください。</p>';
h+='<h2>2. すでに良いところ</h2><div class="good">';
D.good.forEach(function(g){h+='<div><b>'+e(g[0])+'</b><span>'+e(g[1])+'</span></div>'});
h+='</div><h2>3. 伸ばせるところ</h2>';
D.gaps.forEach(function(g){h+='<div class="gap"><p class="f">'+e(g[0])+'</p><p><em>できること</em>'+e(g[1])+'</p><p><em>期待できること</em>'+e(g[2])+'</p></div>'});
h+='<p class="note">順位や問い合わせの増加を保証するものではありません。効果は計測した数字でご報告します。</p>';
h+='<div class="offer"><h2>ご提案</h2><p>上の作業（口コミのお願いの仕組み、返信文の作成、マップ投稿の作成、毎月の順位報告）を、<b>月3万円</b>でお引き受けします。<b>初月は無料</b>で、いつでも解約できます。現場の手を止めず、写真と一言メモを送っていただくだけで進めます。</p>';
h+='<p class="c">ご興味があれば、InstagramのDMにそのままご返信いただくか、hitokuru.sns@gmail.com までご連絡ください。ご不要でしたら、返信は不要です。</p></div>';
h+='<footer>口コミ・マップサポート スズキ　<a href="https://suzukimapsupport-glitch.github.io/">https://suzukimapsupport-glitch.github.io</a><br>このページは'+e(D.name)+'様へのご連絡用に作成したもので、検索エンジンには表示されません。</footer></div>';
var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
document.body.innerHTML=h;
})();
