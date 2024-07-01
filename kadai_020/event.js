// btnというidを持つhtml要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つhtml要素を取得し、定数に代入する
const h2 = document.getElementById('text');

// html要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    // textの文章を書き換える
    h2.textContent = 'ボタンをクリックしました';
});