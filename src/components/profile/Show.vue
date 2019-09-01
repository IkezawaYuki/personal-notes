<template>
  <div class="cotainer">
    <div id="contents">
  <div class="member-titleInfo">
        <div class="pattern-1">
            <div class="bg01">
                <div class="pt01">
                    <h2>基本情報</h2>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    <div class="member-confirmArea">
        <div class="pattern-1">
            <div class="pt01">
                <dl> <dt>氏名<span>(必須)</span></dt>
                    <dd class="placeholder">例：山田 太郎</dd>
                </dl>
                <dl> <dt>ふりがな<span>(必須)</span></dt>
                    <dd class="placeholder">例：やまだ たろう</dd>
                </dl>
                <dl> <dt>生年月日<span>(必須)</span></dt>
                    <dd class="placeholder">選択してください</dd>
                </dl>
                <dl> <dt>性別<span>(必須)</span></dt>
                    <dd class="placeholder">選択してください</dd>
                </dl>
                <ul>
                    <li class="li01">
                        <dl> <dt>電話番号<span>(必須)</span></dt>
                            <dd class="placeholder">例：09012345678</dd>
                        </dl>
                    </li>
                    <li class="li02">
                        <dl> <dt>その他の電話番号</dt>
                            <dd class="placeholder">例：08012345678</dd>
                        </dl>
                    </li>
                </ul>
                <ul>
                    <li class="li01">
                        <dl> <dt>メールアドレス<span>(必須)</span></dt>
                            <dd>
                                <ul>
                                    <li>${user_address}</li>
                                    <li><span>※メールアドレスの変更は会員情報設定にて行えます</span></li>
                                </ul>
                            </dd>
                        </dl>
                    </li>
                    <li class="li02">
                        <dl> <dt>その他のメールアドレス</dt>
                            <dd class="placeholder">例：sample2@sample.com</dd>
                        </dl>
                    </li>
                </ul>
                <dl> <dt>連絡可能な日時</dt>
                    <dd class="placeholder">例：水曜日：16時～21時</dd>
                </dl>
                <dl> <dt>郵便番号</dt>
                    <dd class="placeholder">例：〒111-1111</dd>
                </dl>
                <dl> <dt>住所<span>(必須)</span></dt>
                    <dd>
                        <ul>
                            <li><span>都道府県：</span><span class="span01">市区町村：</span></li>
                            <li class="li02"><span>町名・番地・アパートマンション名：</span></li>
                        </ul>
                    </dd>
                </dl>
                <dl> <dt>現在の職業<span>(必須)</span></dt>
                    <dd class="placeholder">選択してください</dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="member-titleInfo">
        <div class="pattern-1">
            <div class="bg01">
                <div class="pt01">
                    <h2>その他情報</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="member-confirmArea">
        <div class="pattern-1">
            <div class="pt01">
                <dl> <dt>自己PR</dt>
                    <dd class="placeholder">例：職場の方々からは気が利くということを評価していただいており、私自身もそこが自分の強みだと自負しております。私は、仕事を進める上で、1つ1つのことを丁寧にこなすことを大切にしており、今後も続けていきたいと思います。</dd>
                </dl>
                <dl> <dt>職務経験</dt>
                    <dd>
                        <ul>
                            <li>
                                <dl> <dt>職務経験の有無</dt>
                                    <dd class="placeholder">選択してください</dd>
                                </dl>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl> <dt>最終学歴</dt>
                    <dd>
                        <ul>
                            <li>
                                <dl> <dt>学校区分</dt>
                                    <dd class="placeholder">選択してください</dd>
                                </dl>
                            </li>
                            <li>
                                <dl> <dt>卒業区分/年度</dt>
                                    <dd class="placeholder">例：1991年1月 卒業/在学/中退</dd>
                                </dl>
                            </li>
                            <li>
                                <dl> <dt>学校名</dt>
                                    <dd class="placeholder">例：私立○○高校 普通科</dd>
                                </dl>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl> <dt>資格・スキル</dt>
                    <dd class="dd01">
                        <ul>
                            <li>
                                <dl> <dt>普通自動車運転免許（第一種）</dt>
                                    <dd class="placeholder">選択してください</dd>
                                </dl>
                            </li>
                            <li>
                                <dl> <dt>パソコンスキル</dt>
                                    <dd class="placeholder">選択してください</dd>
                                </dl>
                            </li>
                            <li>
                                <dl> <dt>資格1</dt>
                                    <dd class="placeholder">
                                        <ul>
                                            <li>例：1991年1月取得</li>
                                            <li>例：大型第二種免許</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl> <dt>写真</dt>
                    <dd class="dd01">
                        <ul>
                            <li class="li02">
                                <ul>
                                    <li>
                                        <dl class="js-imageInput"> <dt>写真1</dt>
                                            <dd> <span><img src="../../assets/logo.png" width="120" height="160" class="js-ii-image" data-imagefile1="photo_001a.png" data-imagefile2="photo_001b.png"></span> <span class="js-ii-hide"><input type="button" value="削除する" class="color03 js-ii-clear"></span> </dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl class="js-imageInput"> <dt>写真2</dt>
                                            <dd> <span><img src="../../assets/logo.png" width="120" height="160" class="js-ii-image" data-imagefile1="photo_002a.png" data-imagefile2="photo_002b.png"></span> <span class="js-ii-hide"><input type="button" value="削除する" class="color03 js-ii-clear"></span> </dd>
                                        </dl>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="common-actionButton">
        <div class="pattern-1">
            <div class="bg01">
                <div class="pt01">
                    <ul>
                        <li>
                            <a class="color05" href="./profileUpdate.php">プロフィールを編集する</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Show',
  data() {
    return {

    }
  }
}
</script>


<style>

</style>