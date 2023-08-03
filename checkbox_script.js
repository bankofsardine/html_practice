function selectWeek(e){
    //checkboxの取得
    var cell_classname= e.target.className;    //w曜日のチェックボックス自身のクラス名を取得（下のセルにも、曜日が同一なら同じクラス名を付けている）
    var check_status = e.target.checked;        //w曜日のチェックボックス自身のチェック状態を取得する
    var cells = document.getElementsByClassName(cell_classname);  //選択した曜日と同じclass名のセルを取得する
    // console.log(cells) //mondayCells, tuesdayCells, wednesdayCells, ...

    //svgイメージの取得
    var svgs = document.getElementsByClassName(cell_classname);
    console.log(svgs);

    //w曜日のチェックボックスを全て変化
    var checkBoxesArr = Array.prototype.slice.call(cells); //w曜日のセル情報を一旦配列にして、下のfor文で繰り返し処理
    // console.log(checkBoxesArr);
    checkBoxesArr.forEach(function(checkBox){
        checkBox.checked = check_status;
    })

    //w曜日のイメージを全て変化
    var svgArr = Array.prototype.slice.call(svgs);
    svgArr.forEach(function(svg_tag){
        svg_tag.src = "./タスクトレイのフリー素材.svg";
    })
}