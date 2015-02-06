//関数 sessiToKasi の定義
function sessiToKasi(ondo){
    //摂氏温度を受け取って華氏温度を返す
    return (9/5)*ondo+32;
}

//関数 showKasi の定義
function showKasi(){
    //変数 sessi にテキストフィールド「c_txt」の値を得る
    var sessi = document.getElementById("c_txt").value;
    //★ 変数 kasi に関数 sessiToKasi の戻り値を得る
    var kasi = sessiToKasi(sessi);
    //もし kasi が非数であれば
    if(isNaN(kasi)){
        //メッセージを表示
        alert("数値を入力してください。");
        document.getElementById("f_txt").value = "";
        //この関数を抜ける
        return false;
    //もし kasi が -459.67 未満であれば
    }else if(kasi < -459.67){
        //メッセージを表示
        alert("絶対0度以上を入力してください。");
        document.getElementById("f_txt").value = "";
        //この関数を抜ける
        return false;
    }
    //select「cb」の selectedIndex の値を得る
    var cb_n = document.getElementById("cb").selectedIndex;
    //kasi の値を『10の「cb.selectedIndex」乗』倍する
    kasi *= Math.pow(10, cb_n);
    //kasi の小数点以下を丸める
    kasi = Math.round(kasi);
    //もし 「cb.selectedIndex」が 0 以外であれば
    if(cb_n){
        //kasi の値を文字列化する
        kasi = kasi.toString();
        //kasi に小数点を入れる
        kasi = kasi.substr(0, kasi.length-cb_n) + "." + kasi.substr(-cb_n,cb_n);
    }
    //華氏用テキストフィールドに kasi を表示
    document.getElementById("f_txt").value = kasi;
}

//ページロード時に実行
window.onload = function(){
    //「btn」クリック時に関数 showKasi を実行
    document.getElementById("btn").onclick = showKasi;
};
