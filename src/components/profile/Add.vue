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
                        <span><input type="text" name="email" value="" prior="7" data-role="error-display" valid_length="10,11" valid_minus="-" valid_m_length="10,13" alt="電話番号" placeholder="example@com" parent="tel1parent" errmsg="tel1_errmsg"></span> <span class="message" name="tel1_errmsg">
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
                        <p></p>
                          <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea"  placeholder="町名・番地・アパートマンション名"></textarea>
                            <label for="textarea1"></label>
                          </div>
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

    <div class="member-titleInfo">
      <div class="pattern-1">
        <div class="bg01">
          <div class="pt01">
            <h2>その他情報</h2>
          </div>
        </div>
      </div>
    </div>

    
    <div class="member-inputForm">
      <div class="pattern-1">
        <div class="bg01">

          <div class="pt02">
            <ul class="js-careerBlock">
              <li class="li01" id="pr_text" name="pr_textparent">
                <dl> <dt>自己PR</dt>
                
                  <dd class="js-textCount">
                    <div class="input-field col s12">
                      <textarea id="textarea1" class="materialize-textarea" placeholder="例：職場の方々からは気が利くということを評価していただいており、私自身もそこが自分の強みだと自負しております。私は、仕事を進める上で、1つ1つのことを丁寧にこなすことを大切にしており、今後も続けていきたいと思います。"></textarea>
                      <label for="textarea1"></label>
                     </div>
                  </dd>
                  
                </dl>
              </li>

              <li class="li02" id="job_careers" name="work_flgparent">
                <dl> <dt>職務経験</dt>
                  <dd>
                    <dl> <dt>職務経験の有無</dt>
                      <dd>
                        <ul>
                          <li><label><input type="radio" name="work_flg" value="0" prior="6" class="js-cb-checkBtn" data-role="error-display"  parent="sexparent" errmsg="sex_errmsg"><span>あり</span></label></li>
                          <li><label><input type="radio" name="work_flg" value="1" prior="6" class="js-cb-checkBtn" data-role="error-display"  parent="sexparent" errmsg="sex_errmsg"><span>なし</span></label></li>
                       </ul>
                        <p class="p01">※「あり」を選択された場合、直近のものから順に職務経験を入力してください。</p> <span class="message" name="work_flg_errmsg"></span>
                      </dd>
                    </dl>
                  </dd>
                </dl>
              </li>


          <!-- <li class="li03 js-cb-moduleItem js-cb-hide"> -->
          <li class="li03 js-cb-moduleItem">
            <dl id="js-career-form-1">
              <dt class="js-cb-blockLabel">経験1</dt>
              <dd>
                <dl class="dl01" name="syu_comp_nameparent1">
                  <dt>勤務先企業名</dt>
                  <dd>
                    <span>
                      <input type="text" name="syu_comp_name1" value="" class="" prior="101" data-role="error-display" num="1" data-max-length="50" valid_length="100" valid_rule_rt="checkStrCount" valid_rule_focus="clearErrorMsg checkStrCount" valid_rule="checkStrCompatible" alt="勤務先企業名" placeholder="例：ディップ株式会社" parent="syu_comp_nameparent1" errmsg="syu_comp_name_errmsg1">
                    </span>
                    <span class="message" name="syu_comp_name_errmsg1">
                      
                    </span>
                  </dd>
                </dl>
                <dl class="dl02 js-workPeriod" name="entry_periodparent1">
                  <dt>経験期間</dt>
                      <dd>
                      開始日
                        <span class="span01"><input type="date" name="birthday"></span> <span class="message" name="birthday_errmsg"></span>
                      </dd>
                      <dd>
                      終了日
                        <span class="span02"><input type="date" name="birthday"></span> <span class="message" name="birthday_errmsg"></span>
                      </dd>
                </dl>
                <dl class="dl03" name="koyo_sts_kbnparent1">
                  <dt>就業形態</dt>
                  <dd>
                      <div class="input-field col s12">
                    <select class="browser-default">
                      <option value="" disabled selected>就業形態を選んでください</option>
                      <option value="1">正社員</option>
                      <option value="2">アルバイト</option>
                      <option value="3">派遣</option>
                      <option value="4">パート</option>
                      <option value="5">業務委託</option>
                      <option value="6">契約社員</option>
                    </select>
                  </div>
                  </dd>
                </dl>
                <dl class="dl06" name="syom_naiyoparent1">
                  <dt>職務内容</dt>
                  <dd class="js-textCount">
                      <div class="input-field col s12">
                        <textarea id="textarea1" class="materialize-textarea" placeholder=""></textarea>
                        <p><span>入力文字<em class="js-tc-currentLength">0</em>文字/</span>最大<em class="js-tc-maxLength">1,000</em>文字</p>
                        <label for="textarea1"></label>
                      </div>
                  </dd>
                </dl>
                <dl class="dl05 js-cb-btnItem">
                  <dt class="js-cb-btnItemLabel">職務経験の<br>追加</dt>
                    <dd>
                      <ul class="ul03">
                        <li class="li01"><a class="color03 js-cb-removeBtn js-cb-hide">職務経験を削除する</a></li>
                        <li class="li02"><a id="js-cb-addBtn1" class="color03 js-cb-addBtn">さらに職務経験を追加する</a></li>
                      </ul>
                    </dd>
                </dl>
              </dd>
            </dl>
          </li>


            </ul>
          </div>


          <div class="pt02">
						<ul>
							<li class="li03" id="school_career">
								<dl> <dt>最終学歴</dt>
									<dd>
										<dl class="dl01" name="gako_kbnparent"> <dt>学校区分</dt>
											<dd> <span>
									    <select name="gako_kbn" class="browser-default" prior="16" data-role="error-display" valid_rule_focus="clearErrorMsg" alt="最終学歴[学校区分]" parent="gako_kbnparent" errmsg="gako_kbn_errmsg">
										    <option value="">選択してください</option>
                        <option value="0">中学</option>
                        <option value="1">高校</option>
                        <option value="4">高等専門学校</option>
                        <option value="3">短大</option>
                        <option value="2">専門学校</option>
                        <option value="5">大学</option>
                        <option value="6">大学院</option>
									</select>
								</span> <span class="message" name="gako_kbn_errmsg">
									
								</span> </dd>
										</dl>
										<dl class="dl06" name="gakurekiparent"> <dt>卒業区分/年度</dt>
											<dd style="padding-bottom: 5px;">
											
                      </dd>
										</dl>
										<dl name="gakoparent"> <dt>学校名</dt>
											<dd> <span>
									    <input type="text" name="gako_name" id="gakureki5" value="" class="" prior="20" data-role="error-display" data-max-length="50" valid_length="100" alt="最終学歴[学校名]" placeholder="例：○○大学○○学部○○学科" parent="gakoparent" errmsg="gako_errmsg">
								      </span> <span class="message" name="gako_errmsg"></span> </dd>
										</dl>
									</dd>
								</dl>
							</li>
						</ul>
					</div>




        </div>
      </div>
    </div>



    <div class="common-actionButton">
    <div class="pattern-1">
      <div class="bg01">
        <div class="pt01">
          <ul>
            <li><input id="updateButton" type="button" value="追加する" class="color01"></li>
          </ul>
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