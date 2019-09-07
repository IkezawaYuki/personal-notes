<template>
  <div class="cotainer">
    <div id="contents">
    <form name="entryform" method="post">
      <div class="layout-column-1" id="input_form">
        <div class="member-titleInfo" id="base_info">
          <div class="pattern-1">
            <div class="bg01">
              <div class="pt01">
                <div class="pt01a">
                  <h2>個人情報の追加</h2>
                </div>
                <div class="pt01b">
                  <ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="member-inputForm">
          <div class="pattern-1">
            <div class="bg01">
              <div class="pt01">
                <dl class="dl01" name="name_knjparent"> <dt>氏名</dt>
                  <dd> <span><input type="text" name="name_knj" prior="1" data-role="error-display" data-max-length="30" valid_length="60"  alt="氏名" placeholder="例：倍取　太郎" parent="name_knjparent" errmsg="name_knj_errmsg"></span> <span class="message" name="name_knj_errmsg"></span> </dd>
                </dl>
                <dl class="dl02" name="name_kanaparent"> <dt>ふりがな</dt>
                  <dd> <span><input type="text" name="name_kana" prior="2" data-role="error-display" data-max-length="30" valid_length="60" alt="ふりがな" placeholder="例：ばいとる　たろう" parent="name_kanaparent" errmsg="name_kana_errmsg"></span> <span class="message" name="name_kana_errmsg"></span> </dd>
                </dl>
                <dl class="dl03" name="birthdayparent"><dt>生年月日</dt>
                  <dd>
                    <span class="span01"><input type="date" name="birthday"></span> <span class="message" name="birthday_errmsg"></span>
                  </dd>
                </dl>
                <dl class="dl04" name="sexparent"> <dt>性別</dt>
                  <dd>
                    <ul>
                      <li><label><input type="radio" name="sex" value="0" prior="6" data-role="error-display" alt="性別" parent="sexparent" errmsg="sex_errmsg"><span>　男性</span></label></li>
                      <li><label><input type="radio" name="sex" value="2" prior="6" data-role="error-display" alt="性別" parent="sexparent" errmsg="sex_errmsg"><span>　女性</span></label></li>
                    </ul> <span class="message" name="sex_errmsg"></span>
                  </dd>
                </dl>
                <ul>
                  <li class="li01">
                    <dl class="dl05" name="tel1parent"> <dt>電話番号</dt>
                      <dd> <span><input type="text" name="tel" value="" class="" prior="7" data-role="error-display" valid_length="10,11" valid_minus="-" valid_m_length="10,13" valid_rule_rt="checkTelNum checkStrLengthMinus" valid_rule_focus="clearErrorMsg checkTelNum checkStrLengthMinus checkStrLengthMinusR" valid_rule="checkTelNum checkStrLengthMinus checkStrLengthMinusR" alt="電話番号" placeholder="例：09012345678" parent="tel1parent" errmsg="tel1_errmsg"></span> <span class="message" name="tel1_errmsg">
                          </span> </dd>
                    </dl>
                  </li>
                </ul>
                <ul>
                  <li class="li01">
                    <dl class="dl06 js-skMailAdress" name="email1parent"><dt>メール<em>アドレス</em></dt>
                      <dd>
                        <span><input type="text" name="email" value=""prior="7" data-role="error-display" valid_length="10,11" valid_minus="-" valid_m_length="10,13" alt="電話番号" placeholder="example@com" parent="tel1parent" errmsg="tel1_errmsg"></span> <span class="message" name="tel1_errmsg">
                          </span> 
                      </dd>
                    </dl>
                  </li>
                </ul>
                <dl class="dl07" name="zip_cdparent"> <dt>郵便番号</dt>
                  <dd> <span><input type="text" name="zip_cd" value="" prior="0" data-role="error-display" maxlength="8" valid_length="7" valid_minlength="7" valid_maxlength="8" alt="郵便番号" placeholder="111-1111" parent="zip_cdparent" errmsg="zip_cd_errmsg"></span> <span class="message" name="zip_cd_errmsg"></span> </dd>
                </dl>
                <dl class="dl08" name="addressparent"> <dt>住所</dt>
                  <dd class="js-textCount">
                    <ul>
                      <li></li>
                      <li class="li02">
                        <p></p> <textarea name="address" class="js-tc-input" prior="23" data-role="error-display" data-max-length="100" valid_length="100" valid_rule_rt="checkStrCount" alt="住所：その他" placeholder="町名・番地・アパートマンション名" parent="addressparent" errmsg="address_errmsg"></textarea>
                        <p></p> <span class="message js-tc-error" name="address_errmsg"></span>
                      </li>
                    </ul>
                  </dd>
                </dl>

                <dl class="dl09" name="zok_kbnparent"> <dt>現在の<em>職業</em></dt>
                  <dd> 
                    <span><input type="text" name="job" prior="1" data-max-length="30" valid_length="60"  alt="職業" placeholder="職業" parent="zok_kbnparent"></span>
                    <span class="message" name="zok_kbn_errmsg"></span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

      </div>
    </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "Add",
  data(){
    return{

    }
  }
}
</script>


<style>

</style>