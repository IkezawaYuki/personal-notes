<template>
  <div class="edit container">
    <div id="contents">
        <form name="entryform" method="post">
	<!-- layout-column -->
	<div class="layout-column-1" id="input_form">
		<!-- member-titleInfo -->
		<div class="member-titleInfo" id="base_info">
			<div class="pattern-1">
				<div class="bg01">
					<div class="pt01">
						<div class="pt01a">
							<h2>基本情報</h2>
						</div>
						<div class="pt01b">
							<ul>

							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
        <!-- //member-titleInfo -->
        
		<!-- member-inputForm -->
		<div class="member-inputForm">
			<div class="pattern-1">
				<div class="bg01">
					<div class="pt01">
						<dl class="dl01" name="name_knjparent"> <dt>氏名<span>(必須)</span></dt>
							<dd> <span><input type="text" name="name_knj" value="" class="" prior="1" data-role="error-display" data-max-length="30" valid_length="60" valid_rule_rt="checkZenkaku checkStrCount" valid_rule_focus="clearErrorMsg checkZenkaku checkStrCount" valid_rule="checkName" alt="氏名" placeholder="例：倍取　太郎" parent="name_knjparent" errmsg="name_knj_errmsg"></span> <span class="message" name="name_knj_errmsg">
					
				</span> </dd>
						</dl>
						<dl class="dl02" name="name_kanaparent"> <dt>ふりがな<span>(必須)</span></dt>
							<dd> <span><input type="text" name="name_kana" value="" class="" prior="2" data-role="error-display" data-max-length="30" valid_length="60" valid_rule_rt="checkZenkakuHiragana checkStrCount" valid_rule_focus="clearErrorMsg checkZenkakuHiragana checkStrCount" valid_rule="" alt="ふりがな" placeholder="例：ばいとる　たろう" parent="name_kanaparent" errmsg="name_kana_errmsg"></span> <span class="message" name="name_kana_errmsg">
					
				</span> </dd>
						</dl>
						<dl class="dl03" name="birthdayparent"> <dt>生年月日<span>(必須)</span></dt>
							<dd>
                                <select name="birthday_year" class="select01" prior="3" data-role="error-display" valid_require="false"  valid_rule_focus="clearErrorMsg" valid_rule="checkDate" alt="生年月日" parent="birthdayparent" errmsg="birthday_errmsg">
					<option value="">----</option>
											<option value="2004">2004</option>
											<option value="2003">2003</option>
											<option value="2002">2002</option>
											<option value="2001">2001</option>
											<option value="2000">2000</option>
											<option value="1999">1999</option>
											<option value="1998">1998</option>
											<option value="1997">1997</option>
											<option value="1996">1996</option>
											<option value="1995">1995</option>
											<option value="1994">1994</option>
											<option value="1993">1993</option>
											<option value="1992">1992</option>
											<option value="1991">1991</option>
											<option value="1990">1990</option>
											<option value="1989">1989</option>
											<option value="1988">1988</option>
											<option value="1987">1987</option>
											<option value="1986">1986</option>
											<option value="1985">1985</option>
											<option value="1984">1984</option>
											<option value="1983">1983</option>
											<option value="1982">1982</option>
											<option value="1981">1981</option>
											<option value="1980">1980</option>
											<option value="1979">1979</option>
											<option value="1978">1978</option>
											<option value="1977">1977</option>
											<option value="1976">1976</option>
											<option value="1975">1975</option>
											<option value="1974">1974</option>
											<option value="1973">1973</option>
											<option value="1972">1972</option>
											<option value="1971">1971</option>
											<option value="1970">1970</option>
											<option value="1969">1969</option>
											<option value="1968">1968</option>
											<option value="1967">1967</option>
											<option value="1966">1966</option>
											<option value="1965">1965</option>
											<option value="1964">1964</option>
											<option value="1963">1963</option>
											<option value="1962">1962</option>
											<option value="1961">1961</option>
											<option value="1960">1960</option>
											<option value="1959">1959</option>
											<option value="1958">1958</option>
											<option value="1957">1957</option>
											<option value="1956">1956</option>
											<option value="1955">1955</option>
											<option value="1954">1954</option>
											<option value="1953">1953</option>
											<option value="1952">1952</option>
											<option value="1951">1951</option>
											<option value="1950">1950</option>
											<option value="1949">1949</option>
											<option value="1948">1948</option>
											<option value="1947">1947</option>
											<option value="1946">1946</option>
											<option value="1945">1945</option>
											<option value="1944">1944</option>
											<option value="1943">1943</option>
											<option value="1942">1942</option>
											<option value="1941">1941</option>
											<option value="1940">1940</option>
					
				</select>年 <select name="birthday_month" class="select02" prior="3" data-role="error-display" valid_require="false" valid_rule_focus="clearErrorMsg" valid_rule="checkDate" alt="生年月日" parent="birthdayparent" errmsg="birthday_errmsg">
					<option value="">--</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
											<option value="9">9</option>
											<option value="10">10</option>
											<option value="11">11</option>
											<option value="12">12</option>
					
				</select>月 <select name="birthday_day" class="select03" prior="3" data-role="error-display" valid_require="false" valid_rule_focus="clearErrorMsg" valid_rule="checkDate" alt="生年月日" parent="birthdayparent" errmsg="birthday_errmsg">
					<option value="">--</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10</option>
												<option value="11">11</option>
												<option value="12">12</option>
												<option value="13">13</option>
												<option value="14">14</option>
												<option value="15">15</option>
												<option value="16">16</option>
												<option value="17">17</option>
												<option value="18">18</option>
												<option value="19">19</option>
												<option value="20">20</option>
												<option value="21">21</option>
												<option value="22">22</option>
												<option value="23">23</option>
												<option value="24">24</option>
												<option value="25">25</option>
												<option value="26">26</option>
												<option value="27">27</option>
												<option value="28">28</option>
												<option value="29">29</option>
												<option value="30">30</option>
												<option value="31">31</option>
						
				</select>日 <span class="span01"></span> <span class="message" name="birthday_errmsg">
					
				</span> </dd>
						</dl>
						<dl class="dl04" name="sexparent"> <dt>性別<span>(必須)</span></dt>
							<dd>
								<ul>
									<li class="li01 radioDesign02"><label><input type="radio" name="sex" value="0" class="" prior="6" data-role="error-display" valid_rule_click="clearErrorMsg" valid_rule="" alt="性別" parent="sexparent" errmsg="sex_errmsg"><span>男性</span></label></li>
									<li class="li02 radioDesign02"><label><input type="radio" name="sex" value="2" class="" prior="6" data-role="error-display" valid_rule_click="clearErrorMsg" valid_rule="" alt="性別" parent="sexparent" errmsg="sex_errmsg"><span>女性</span></label></li>
								</ul> <span class="message" name="sex_errmsg">
					
				</span> </dd>
						</dl>
						<ul>
							<li class="li01">
								<dl class="dl05" name="tel1parent"> <dt>電話番号<span>(必須)</span></dt>
									<dd> <span><input type="text" name="tel1" value="" class="" prior="7" data-role="error-display" valid_length="10,11" valid_minus="-" valid_m_length="10,13" valid_rule_rt="checkTelNum checkStrLengthMinus" valid_rule_focus="clearErrorMsg checkTelNum checkStrLengthMinus checkStrLengthMinusR" valid_rule="checkTelNum checkStrLengthMinus checkStrLengthMinusR" alt="電話番号" placeholder="例：09012345678" parent="tel1parent" errmsg="tel1_errmsg"></span> <span class="message" name="tel1_errmsg">
							
						</span> </dd>
								</dl>
							</li>
							<li class="li02">
								<dl class="dl05" name="tel2parent"> <dt>その他の電話番号</dt>
									<dd> <span><input type="text" name="tel2" value="" class="" prior="11" data-role="error-display" valid_length="10,11" valid_minus="-" valid_m_length="10,13" valid_rule_rt="checkTelNum checkStrLengthMinus" valid_rule_focus="clearErrorMsg checkTelNum checkStrLengthMinus checkStrLengthMinusR" valid_rule="checkTelNum checkStrLengthMinus checkStrLengthMinusR" alt="電話番号" placeholder="例：09012345678" parent="tel2parent" errmsg="tel2_errmsg"></span> <span class="message " name="tel2_errmsg">
							
						</span> </dd>
								</dl>
							</li>
						</ul>
						<ul>
							<li class="li01">
								<dl class="dl06 js-skMailAdress" name="email1parent"> <dt>メール<em>アドレス</em><span>(必須)</span></dt>
									<dd>
										<ul>
											<li>y-ikezawa@dip-net.co.jp</li>
											<li><span>※メールアドレスの変更は会員情報設定にて行えます。</span></li> <input type="hidden" name="email1" value="y-ikezawa@dip-net.co.jp"> </ul>
									</dd>
								</dl>
							</li>
							<li class="li02">
								<dl class="dl06 js-skMailAdress" name="email2parent"> <dt>その他のメールアドレス</dt>
									<dd>
										<ul>
											<li class="li01">
												<p><input type="text" name="email2" value="" class="js-skma-input" prior="12" data-role="error-display" valid_length="100" valid_rule_focus="clearErrorMsg checkStrLengthB checkMailAddress" alt="メールアドレス" placeholder="例：sample@sample.com" parent="email2parent" errmsg="email2_errmsg"><a href="#" class="js-skma-close js-skma-hide" tabindex="-1"><img src="" width="20" height="20" alt=""></a></p>
											</li>
										</ul>
							
					</dd>
								</dl>
							</li>
						</ul>
						<dl class="dl02" name="obo_freeparent"> <dt>連絡可能な日時</dt>
							<dd class="js-textCount">
								<p class="p01">応募後のスムーズなご連絡のため、ご記入をオススメします。</p> <textarea name="obo_free" class="js-tc-input" prior="13" data-role="error-display" data-max-length="1000" valid_length="1000" valid_rule_rt="checkStrCount" valid_rule_focus="clearErrorMsg checkStrCount" valid_rule="checkStrCompatible" alt="連絡可能な日時" placeholder="例：水曜日：16時～21時" parent="obo_freeparent" errmsg="obo_free_errmsg"></textarea>
								<p></p> <span class="message" name="obo_free_errmsg">
					
				</span> </dd>
						</dl>
						<dl class="dl07" name="zip_cdparent"> <dt>郵便番号</dt>
							<dd> <span><input type="text" name="zip_cd" value="" class="" prior="0" data-role="error-display" maxlength="8" valid_length="7" valid_minlength="7" valid_maxlength="8" valid_rule_rt="checkZipCode" valid_rule_focus="clearErrorMsg checkZipCode checkZipCodeRange checkZipCodeFormat" alt="郵便番号" placeholder="" parent="zip_cdparent" errmsg="zip_cd_errmsg"></span> <span class="message" name="zip_cd_errmsg">
					
				</span> </dd>
						</dl>
						<dl class="dl08" name="addressparent"> <dt>住所<span>(必須)</span></dt>
							<dd class="js-textCount">
								<ul>
									<li> 
                                    
                                    <select name="tdfk_cd" class="select01" prior="23" data-role="error-display" valid_default="0" onchange="" valid_rule_focus="clearErrorMsg" valid_rule="" alt="都道府県" parent="addressparent" errmsg="address_errmsg">
							<option value="0">都道府県</option>
															<option value="13">東京都</option>
															<option value="14">神奈川県</option>
															<option value="12">千葉県</option>
															<option value="11">埼玉県</option>
															<option value="08">茨城県</option>
															<option value="09">栃木県</option>
															<option value="10">群馬県</option>
															<option value="23">愛知県</option>
															<option value="21">岐阜県</option>
															<option value="24">三重県</option>
															<option value="22">静岡県</option>
															<option value="27">大阪府</option>
															<option value="28">兵庫県</option>
															<option value="26">京都府</option>
															<option value="25">滋賀県</option>
															<option value="29">奈良県</option>
															<option value="30">和歌山県</option>
															<option value="01">北海道</option>
															<option value="02">青森県</option>
															<option value="03">岩手県</option>
															<option value="04">宮城県</option>
															<option value="05">秋田県</option>
															<option value="06">山形県</option>
															<option value="07">福島県</option>
															<option value="19">山梨県</option>
															<option value="20">長野県</option>
															<option value="15">新潟県</option>
															<option value="16">富山県</option>
															<option value="17">石川県</option>
															<option value="18">福井県</option>
															<option value="34">広島県</option>
															<option value="33">岡山県</option>
															<option value="31">鳥取県</option>
															<option value="32">島根県</option>
															<option value="35">山口県</option>
															<option value="37">香川県</option>
															<option value="36">徳島県</option>
															<option value="38">愛媛県</option>
															<option value="39">高知県</option>
															<option value="40">福岡県</option>
															<option value="41">佐賀県</option>
															<option value="42">長崎県</option>
															<option value="43">熊本県</option>
															<option value="44">大分県</option>
															<option value="45">宮崎県</option>
															<option value="46">鹿児島県</option>
															<option value="47">沖縄県</option>
							
                        </select> 
                        <select name="city_cd" class="select02" prior="23" data-role="error-display" valid_default="0" valid_rule_focus="clearErrorMsg" valid_rule="" alt="市区町村" parent="addressparent" errmsg="address_errmsg">
							        <option value="0">市区町村</option>
															<option value="101">さいたま市西区</option>
															<option value="102">さいたま市北区</option>
															<option value="103">さいたま市大宮区</option>
															<option value="104">さいたま市見沼区</option>
															<option value="105">さいたま市中央区</option>
															<option value="106">さいたま市桜区</option>
															<option value="107">さいたま市浦和区</option>
															<option value="108">さいたま市南区</option>
															<option value="109">さいたま市緑区</option>
															<option value="110">さいたま市岩槻区</option>
															<option value="201">川越市</option>
															<option value="202">熊谷市</option>
															<option value="203">川口市</option>
															<option value="206">行田市</option>
															<option value="207">秩父市</option>
															<option value="208">所沢市</option>
															<option value="209">飯能市</option>
															<option value="210">加須市</option>
															<option value="211">本庄市</option>
															<option value="212">東松山市</option>
															<option value="214">春日部市</option>
															<option value="215">狭山市</option>
															<option value="216">羽生市</option>
															<option value="217">鴻巣市</option>
															<option value="218">深谷市</option>
															<option value="219">上尾市</option>
															<option value="221">草加市</option>
															<option value="222">越谷市</option>
															<option value="223">蕨市</option>
															<option value="224">戸田市</option>
															<option value="225">入間市</option>
															<option value="227">朝霞市</option>
															<option value="228">志木市</option>
															<option value="229">和光市</option>
															<option value="230">新座市</option>
															<option value="231">桶川市</option>
															<option value="232">久喜市</option>
															<option value="233">北本市</option>
															<option value="234">八潮市</option>
															<option value="235">富士見市</option>
															<option value="237">三郷市</option>
															<option value="238">蓮田市</option>
															<option value="239">坂戸市</option>
															<option value="240">幸手市</option>
															<option value="241">鶴ヶ島市</option>
															<option value="242">日高市</option>
															<option value="243">吉川市</option>
															<option value="245">ふじみ野市</option>
															<option value="246">白岡市</option>
															<option value="301">北足立郡伊奈町</option>
															<option value="324">入間郡三芳町</option>
															<option value="326">入間郡毛呂山町</option>
															<option value="327">入間郡越生町</option>
															<option value="341">比企郡滑川町</option>
															<option value="342">比企郡嵐山町</option>
															<option value="343">比企郡小川町</option>
															<option value="346">比企郡川島町</option>
															<option value="347">比企郡吉見町</option>
															<option value="348">比企郡鳩山町</option>
															<option value="349">比企郡ときがわ町</option>
															<option value="361">秩父郡横瀬町</option>
															<option value="362">秩父郡皆野町</option>
															<option value="363">秩父郡長瀞町</option>
															<option value="365">秩父郡小鹿野町</option>
															<option value="369">秩父郡東秩父村</option>
															<option value="381">児玉郡美里町</option>
															<option value="383">児玉郡神川町</option>
															<option value="385">児玉郡上里町</option>
															<option value="408">大里郡寄居町</option>
															<option value="442">南埼玉郡宮代町</option>
															<option value="464">北葛飾郡杉戸町</option>
															<option value="465">北葛飾郡松伏町</option>
							
                        </select> 
                    </li>
									<li class="li02">
										<p><span class="info">町名・番地・アパートマンション名は任意です。</span><span class="span01">この項目はスカウト非公開</span></p> <textarea name="address" class="js-tc-input" prior="23" data-role="error-display" data-max-length="100" valid_length="100" valid_rule_rt="checkStrCount" valid_rule_focus="clearErrorMsg checkStrCount" valid_rule="checkStrCompatible" alt="住所：その他" placeholder="町名・番地・アパートマンション名" parent="addressparent" errmsg="address_errmsg"></textarea>
										<p></p> <span class="message js-tc-error" name="address_errmsg">
							
						</span> </li>
								</ul>
							</dd>
						</dl>
						<dl class="dl09" name="zok_kbnparent"> <dt>現在の<em>職業</em><span>(必須)</span></dt>
							<dd> <select name="zok_kbn" class="" prior="9" data-role="error-display" valid_rule_focus="clearErrorMsg" valid_rule="" alt="現在の職業" parent="zok_kbnparent" errmsg="zok_kbn_errmsg">
					<option value="">選択してください</option>
											<option value="10">高校生</option>
											<option value="11">大学生</option>
											<option value="12">大学院生</option>
											<option value="13">短大生</option>
											<option value="14">専門学生</option>
											<option value="2">アルバイト</option>
											<option value="15">パート</option>
											<option value="0">正社員</option>
											<option value="3">契約社員</option>
											<option value="1">派遣社員</option>
											<option value="7">主婦・主夫</option>
											<option value="8">無職</option>
											<option value="9">その他</option>
					
				</select> <span class="message" name="zok_kbn_errmsg">
					
				</span> </dd>
						</dl>
					</div>
				</div>
			</div>
		</div>
		<!-- //member-inputForm -->
		<!-- member-titleInfo -->
		<div class="member-titleInfo">
			<div class="pattern-1">
				<div class="bg01">
					<div class="pt01">
						<h2>その他情報</h2>
					</div>
				</div>
			</div>
		</div>
		<!-- //member-titleInfo -->
		<!-- member-inputForm -->
		<div class="member-inputForm">
			<div class="pattern-1">
				<div class="bg01">
					<div class="pt02">
						<ul class="js-careerBlock">
							<li class="li01" id="pr_text" name="pr_textparent">
								<dl> <dt>自己PR</dt>
									<dd class="js-textCount"> <textarea name="pr_text" class="js-tc-input" prior="10" data-role="error-display" data-max-length="1000" valid_rule_rt="checkStrCount" valid_rule_focus="clearErrorMsg checkStrCount" valid_rule="checkStrCompatible" alt="自己PR" placeholder="例：職場の方々からは気が利くということを評価していただいており、私自身もそこが自分の強みだと自負しております。私は、仕事を進める上で、1つ1つのことを丁寧にこなすことを大切にしており、今後も続けていきたいと思います。" parent="pr_textparent" errmsg="pr_text_errmsg"></textarea>
										<p></p> <span class="message js-tc-error" name="pr_text_errmsg">
							
						</span> </dd>
								</dl>
							</li>
							<li class="li02" id="job_careers" name="work_flgparent">
								<dl> <dt>職務経験</dt>
									<dd>
										<dl> <dt>職務経験の有無</dt>
											<dd>
												<ul>
													<li class="li01 radioDesign02"><label><input type="radio" name="work_flg" value="0" class="js-cb-checkBtn" prior="27" data-role="error-display" valid_rule_click="clearErrorMsg" alt="職務経験の有無" parent="work_flgparent" errmsg="work_flg_errmsg"><span>あり</span></label></li>
													<li class="li02 radioDesign02"><label><input type="radio" name="work_flg" value="1" class="js-cb-checkBtn" prior="27" data-role="error-display" valid_rule_click="clearErrorMsg" alt="職務経験の有無" parent="work_flgparent" errmsg="work_flg_errmsg"><span>なし</span></label></li>
												</ul>
												<p class="p01">※「あり」を選択された場合、直近のものから順に職務経験を入力してください。</p> <span class="message" name="work_flg_errmsg">
									
								</span> </dd>
										</dl>
									</dd>
								</dl>
							</li>
							
							<li class="li03 js-cb-moduleItem js-cb-hide">
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
								<ul class="ul01">
									<li class="start_period">
										<select name="entry_year1" class="select01" prior="151" data-role="error-display" num="1" valid_group="career_ym1" valid_date="start_y" valid_rule_focus="clearErrorMsg" valid_rule="checkNullCareerPeriod checkCareerPeriod" alt="経験期間" parent="entry_periodparent1" errmsg="entry_period_errmsg1">
											<option value="">----</option>
																						<option value="2019">2019</option>
																						<option value="2018">2018</option>
																						<option value="2017">2017</option>
																						<option value="2016">2016</option>
																						<option value="2015">2015</option>
																						<option value="2014">2014</option>
																						<option value="2013">2013</option>
																						<option value="2012">2012</option>
																						<option value="2011">2011</option>
																						<option value="2010">2010</option>
																						<option value="2009">2009</option>
																						<option value="2008">2008</option>
																						<option value="2007">2007</option>
																						<option value="2006">2006</option>
																						<option value="2005">2005</option>
																						<option value="2004">2004</option>
																						<option value="2003">2003</option>
																						<option value="2002">2002</option>
																						<option value="2001">2001</option>
																						<option value="2000">2000</option>
																						<option value="1999">1999</option>
																						<option value="1998">1998</option>
																						<option value="1997">1997</option>
																						<option value="1996">1996</option>
																						<option value="1995">1995</option>
																						<option value="1994">1994</option>
																						<option value="1993">1993</option>
																						<option value="1992">1992</option>
																						<option value="1991">1991</option>
																						<option value="1990">1990</option>
																						<option value="1989">1989</option>
																						<option value="1988">1988</option>
																						<option value="1987">1987</option>
																						<option value="1986">1986</option>
																						<option value="1985">1985</option>
																						<option value="1984">1984</option>
																						<option value="1983">1983</option>
																						<option value="1982">1982</option>
																						<option value="1981">1981</option>
																						<option value="1980">1980</option>
																						<option value="1979">1979</option>
																						<option value="1978">1978</option>
																						<option value="1977">1977</option>
																						<option value="1976">1976</option>
																						<option value="1975">1975</option>
																						<option value="1974">1974</option>
																						<option value="1973">1973</option>
																						<option value="1972">1972</option>
																						<option value="1971">1971</option>
																						<option value="1970">1970</option>
																						<option value="1969">1969</option>
																						<option value="1968">1968</option>
																						<option value="1967">1967</option>
																						<option value="1966">1966</option>
																						<option value="1965">1965</option>
																						<option value="1964">1964</option>
																						<option value="1963">1963</option>
																						<option value="1962">1962</option>
																						<option value="1961">1961</option>
																						<option value="1960">1960</option>
																						<option value="1959">1959</option>
																						<option value="1958">1958</option>
																						<option value="1957">1957</option>
																						<option value="1956">1956</option>
																						<option value="1955">1955</option>
																						<option value="1954">1954</option>
																						<option value="1953">1953</option>
																						<option value="1952">1952</option>
																						<option value="1951">1951</option>
																						<option value="1950">1950</option>
																						<option value="1949">1949</option>
																						<option value="1948">1948</option>
																						<option value="1947">1947</option>
																						<option value="1946">1946</option>
																						<option value="1945">1945</option>
																						<option value="1944">1944</option>
																						<option value="1943">1943</option>
																						<option value="1942">1942</option>
																						<option value="1941">1941</option>
																						<option value="1940">1940</option>
											
										</select>年
										<select name="entry_month1" class="select02" prior="151" data-role="error-display" num="1" valid_group="career_ym1" valid_date="start_m" valid_rule_focus="clearErrorMsg" valid_rule="checkNullCareerPeriod checkCareerPeriod" alt="経験期間" parent="entry_periodparent1" errmsg="entry_period_errmsg1">
											<option value="">--</option>
																						<option value="1">1</option>
																						<option value="2">2</option>
																						<option value="3">3</option>
																						<option value="4">4</option>
																						<option value="5">5</option>
																						<option value="6">6</option>
																						<option value="7">7</option>
																						<option value="8">8</option>
																						<option value="9">9</option>
																						<option value="10">10</option>
																						<option value="11">11</option>
																						<option value="12">12</option>
											
										</select>月
									</li>
									<li class="li01">
										<span>～</span>
									</li>
									<li class="end_period">
										<select name="leave_year1" class="select01 js-wp-workEnd" prior="151" data-role="error-display" num="1" valid_group="career_ym1" valid_date="end_y" valid_rule_focus="clearErrorMsg" valid_rule="checkNullCareerPeriod checkCareerPeriod" alt="経験期間" parent="entry_periodparent1" errmsg="entry_period_errmsg1">
											<option value="">----</option>
																						<option value="2019">2019</option>
																						<option value="2018">2018</option>
																						<option value="2017">2017</option>
																						<option value="2016">2016</option>
																						<option value="2015">2015</option>
																						<option value="2014">2014</option>
																						<option value="2013">2013</option>
																						<option value="2012">2012</option>
																						<option value="2011">2011</option>
																						<option value="2010">2010</option>
																						<option value="2009">2009</option>
																						<option value="2008">2008</option>
																						<option value="2007">2007</option>
																						<option value="2006">2006</option>
																						<option value="2005">2005</option>
																						<option value="2004">2004</option>
																						<option value="2003">2003</option>
																						<option value="2002">2002</option>
																						<option value="2001">2001</option>
																						<option value="2000">2000</option>
																						<option value="1999">1999</option>
																						<option value="1998">1998</option>
																						<option value="1997">1997</option>
																						<option value="1996">1996</option>
																						<option value="1995">1995</option>
																						<option value="1994">1994</option>
																						<option value="1993">1993</option>
																						<option value="1992">1992</option>
																						<option value="1991">1991</option>
																						<option value="1990">1990</option>
																						<option value="1989">1989</option>
																						<option value="1988">1988</option>
																						<option value="1987">1987</option>
																						<option value="1986">1986</option>
																						<option value="1985">1985</option>
																						<option value="1984">1984</option>
																						<option value="1983">1983</option>
																						<option value="1982">1982</option>
																						<option value="1981">1981</option>
																						<option value="1980">1980</option>
																						<option value="1979">1979</option>
																						<option value="1978">1978</option>
																						<option value="1977">1977</option>
																						<option value="1976">1976</option>
																						<option value="1975">1975</option>
																						<option value="1974">1974</option>
																						<option value="1973">1973</option>
																						<option value="1972">1972</option>
																						<option value="1971">1971</option>
																						<option value="1970">1970</option>
																						<option value="1969">1969</option>
																						<option value="1968">1968</option>
																						<option value="1967">1967</option>
																						<option value="1966">1966</option>
																						<option value="1965">1965</option>
																						<option value="1964">1964</option>
																						<option value="1963">1963</option>
																						<option value="1962">1962</option>
																						<option value="1961">1961</option>
																						<option value="1960">1960</option>
																						<option value="1959">1959</option>
																						<option value="1958">1958</option>
																						<option value="1957">1957</option>
																						<option value="1956">1956</option>
																						<option value="1955">1955</option>
																						<option value="1954">1954</option>
																						<option value="1953">1953</option>
																						<option value="1952">1952</option>
																						<option value="1951">1951</option>
																						<option value="1950">1950</option>
																						<option value="1949">1949</option>
																						<option value="1948">1948</option>
																						<option value="1947">1947</option>
																						<option value="1946">1946</option>
																						<option value="1945">1945</option>
																						<option value="1944">1944</option>
																						<option value="1943">1943</option>
																						<option value="1942">1942</option>
																						<option value="1941">1941</option>
																						<option value="1940">1940</option>
											
										</select>年
										<select name="leave_month1" class="select02 js-wp-workEnd" prior="151" data-role="error-display" num="1" valid_group="career_ym1" valid_date="end_m" valid_rule_focus="clearErrorMsg" valid_rule="checkNullCareerPeriod checkCareerPeriod" alt="経験期間" parent="entry_periodparent1" errmsg="entry_period_errmsg1">
											<option value="">--</option>
																						<option value="1">1</option>
																						<option value="2">2</option>
																						<option value="3">3</option>
																						<option value="4">4</option>
																						<option value="5">5</option>
																						<option value="6">6</option>
																						<option value="7">7</option>
																						<option value="8">8</option>
																						<option value="9">9</option>
																						<option value="10">10</option>
																						<option value="11">11</option>
																						<option value="12">12</option>
											
										</select>月
										<input id="post_keiken_year1" type="hidden" name="keiken_year1" value="">
									</li>
								</ul>
																<ul class="ul02 checkDesign js-cb-removeFromClone">
									<li class="checked"><span><label><input type="checkbox" name="working_chk1" value="1" class="js-wp-workingCheck" prior="151" data-role="error-display" num="1" valid_rule_click="clearErrorMsg" parent="entry_periodparent1" errmsg="entry_period_errmsg1"><em>就業中の方はこちらをチェック</em></label></span></li>
								</ul>
																<span class="message" name="entry_period_errmsg1">
									
								</span>
							</dd>
						</dl>
						<dl class="dl03" name="koyo_sts_kbnparent1">
							<dt>就業形態</dt>
							<dd>
								<span>
									<select name="koyo_sts_kbn1" class="select01" prior="351" data-role="error-display" num="1" valid_rule_focus="clearErrorMsg" valid_rule="checkNullCareer" alt="就業形態" parent="koyo_sts_kbnparent1" errmsg="koyo_sts_kbn_errmsg1">
										<option value="">選択してください</option>
																					<option value="0">正社員</option>
																					<option value="1">派遣社員</option>
																					<option value="2">アルバイト</option>
																					<option value="3">契約社員</option>
																					<option value="4">公務員</option>
																					<option value="5">フリー・自営業</option>
																					<option value="15">パート</option>
																					<option value="9">その他</option>
										
									</select>
								</span>
								<span class="message" name="koyo_sts_kbn_errmsg1">
									
								</span>
							</dd>
						</dl>
						<dl class="dl04" name="keiken_shok_cdparent1">
							<dt>職種</dt>
							<dd>
								<ul>
									<li>
										<select name="keiken_shok_l_cd1" class="keiken_shok_cd_l" prior="451" data-role="error-display" num="1" valid_rule_focus="clearErrorMsg" valid_rule="checkNullCareer" alt="経験職種" parent="keiken_shok_cdparent1" errmsg="shok_errmsg1">
											<option value="">選択してください</option>
																							<option value="84">販売</option>
																							<option value="85">フード・飲食</option>
																							<option value="86">サービス</option>
																							<option value="82">イベント</option>
																							<option value="87">軽作業・物流</option>
																							<option value="8E">工場・製造</option>
																							<option value="88">建築・土木</option>
																							<option value="80">営業</option>
																							<option value="81">オフィス</option>
																							<option value="83">IT・クリエイティブ/クリエイター</option>
																							<option value="8A">教育</option>
																							<option value="89">医療・介護・福祉</option>
																							<option value="8B">美容・理容・サロン</option>
																							<option value="8D">調査・モニター</option>
																							<option value="8F">専門職、その他</option>
																							<option value="8C">ガールズバー・キャバクラ・スナック</option>
											
										</select>
									</li>
									<li class="li01">
										<select name="keiken_shok_m_cd1" class="keiken_shok_cd_m" prior="452" data-role="error-display" num="1" valid_rule_focus="clearErrorMsg" alt="経験職種" parent="keiken_shok_cdparent1" errmsg="shok_errmsg1">
											<option value="">選択してください</option>
											<option value="m0">中分類０</option>
											<option value="m1">中分類１</option>
											<option value="m2">中分類２</option>
											<option value="m3">中分類３</option>
											<option value="m4">中分類４</option>
											<option value="m5">中分類５</option>
											<option value="m6">中分類６</option>
											<option value="m7">中分類７</option>
											<option value="m8">中分類８</option>
											<option value="m9">中分類９</option>
											
										</select>
									</li>
									<li class="li02">
										<select name="keiken_shok_s_cd1" class="keiken_shok_cd_s" prior="453" data-role="error-display" num="1" valid_rule_focus="clearErrorMsg" alt="経験職種" parent="keiken_shok_cdparent1" errmsg="shok_errmsg1">
											<option value="">選択してください</option>
											<option value="s0">小分類０</option>
											<option value="s1">小分類１</option>
											<option value="s2">小分類２</option>
											<option value="s3">小分類３</option>
											<option value="s4">小分類４</option>
											<option value="s5">小分類５</option>
											<option value="s6">小分類６</option>
											<option value="s7">小分類７</option>
											<option value="s8">小分類８</option>
											<option value="s9">小分類９</option>
										</select>
									</li>
								</ul>
								<span class="message" name="shok_errmsg1">
									
								</span>
							</dd>
						</dl>
						<dl class="dl06" name="syom_naiyoparent1">
							<dt>職務内容</dt>
							<dd class="js-textCount">
								<textarea name="syom_naiyo1" class="js-tc-input" prior="501" data-role="error-display" data-max-length="1000" num="1" valid_length="1000" valid_rule_rt="checkStrCount" valid_rule_focus="clearErrorMsg checkStrCount" valid_rule="checkStrCompatible" alt="職務内容" parent="syom_naiyoparent1" errmsg="syom_naiyo_errmsg1"></textarea>
								<p><span>入力文字<em class="js-tc-currentLength">0</em>文字/</span>最大<em class="js-tc-maxLength">1,000</em>文字</p>
								<span class="message js-tc-error" name="syom_naiyo_errmsg1">
									
								</span>
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
									<select name="gako_kbn" class="" prior="16" data-role="error-display" valid_rule_focus="clearErrorMsg" alt="最終学歴[学校区分]" parent="gako_kbnparent" errmsg="gako_kbn_errmsg">
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
												<ul>
													<li class="li01"> <select name="gako_sts_kbn" id="gakureki4" class="li01" prior="17" data-role="error-display" valid_rule_focus="clearErrorMsg" alt="最終学歴[卒業区分]" parent="gakurekiparent" errmsg="gakureki_errmsg">
											<option value="">卒業/在学/中退</option>
																							<option value="2">卒業</option>
																							<option value="1">在学</option>
																							<option value="3">中退</option>
											
										</select> </li>
													<li class="li02"> <select name="gako_year" id="gakureki2" class="select01" prior="18" data-role="error-display" valid_rule_focus="clearErrorMsg" valid_rule="checkGraduateYm" alt="最終学歴[年度]" parent="gakurekiparent" errmsg="gako_year_errmsg">
											<option value="">----</option>
																							<option value="2023">2023</option>
																							<option value="2022">2022</option>
																							<option value="2021">2021</option>
																							<option value="2020">2020</option>
																							<option value="2019">2019</option>
																							<option value="2018">2018</option>
																							<option value="2017">2017</option>
																							<option value="2016">2016</option>
																							<option value="2015">2015</option>
																							<option value="2014">2014</option>
																							<option value="2013">2013</option>
																							<option value="2012">2012</option>
																							<option value="2011">2011</option>
																							<option value="2010">2010</option>
																							<option value="2009">2009</option>
																							<option value="2008">2008</option>
																							<option value="2007">2007</option>
																							<option value="2006">2006</option>
																							<option value="2005">2005</option>
																							<option value="2004">2004</option>
																							<option value="2003">2003</option>
																							<option value="2002">2002</option>
																							<option value="2001">2001</option>
																							<option value="2000">2000</option>
																							<option value="1999">1999</option>
																							<option value="1998">1998</option>
																							<option value="1997">1997</option>
																							<option value="1996">1996</option>
																							<option value="1995">1995</option>
																							<option value="1994">1994</option>
																							<option value="1993">1993</option>
																							<option value="1992">1992</option>
																							<option value="1991">1991</option>
																							<option value="1990">1990</option>
																							<option value="1989">1989</option>
																							<option value="1988">1988</option>
																							<option value="1987">1987</option>
																							<option value="1986">1986</option>
																							<option value="1985">1985</option>
																							<option value="1984">1984</option>
																							<option value="1983">1983</option>
																							<option value="1982">1982</option>
																							<option value="1981">1981</option>
																							<option value="1980">1980</option>
																							<option value="1979">1979</option>
																							<option value="1978">1978</option>
																							<option value="1977">1977</option>
																							<option value="1976">1976</option>
																							<option value="1975">1975</option>
																							<option value="1974">1974</option>
																							<option value="1973">1973</option>
																							<option value="1972">1972</option>
																							<option value="1971">1971</option>
																							<option value="1970">1970</option>
																							<option value="1969">1969</option>
																							<option value="1968">1968</option>
																							<option value="1967">1967</option>
																							<option value="1966">1966</option>
																							<option value="1965">1965</option>
																							<option value="1964">1964</option>
																							<option value="1963">1963</option>
																							<option value="1962">1962</option>
																							<option value="1961">1961</option>
																							<option value="1960">1960</option>
																							<option value="1959">1959</option>
																							<option value="1958">1958</option>
																							<option value="1957">1957</option>
																							<option value="1956">1956</option>
																							<option value="1955">1955</option>
																							<option value="1954">1954</option>
																							<option value="1953">1953</option>
																							<option value="1952">1952</option>
																							<option value="1951">1951</option>
																							<option value="1950">1950</option>
																							<option value="1949">1949</option>
																							<option value="1948">1948</option>
																							<option value="1947">1947</option>
																							<option value="1946">1946</option>
																							<option value="1945">1945</option>
																							<option value="1944">1944</option>
																							<option value="1943">1943</option>
																							<option value="1942">1942</option>
																							<option value="1941">1941</option>
																							<option value="1940">1940</option>
											
										</select>年 <select name="gako_month" id="gakureki3" class="select02" prior="18" data-role="error-display" valid_rule_focus="clearErrorMsg" valid_rule="checkGraduateYm" alt="最終学歴[年度]" parent="gakurekiparent" errmsg="gako_year_errmsg">
											<option value="">--</option>
																							<option value="1">1</option>
																							<option value="2">2</option>
																							<option value="3">3</option>
																							<option value="4">4</option>
																							<option value="5">5</option>
																							<option value="6">6</option>
																							<option value="7">7</option>
																							<option value="8">8</option>
																							<option value="9">9</option>
																							<option value="10">10</option>
																							<option value="11">11</option>
																							<option value="12">12</option>
											
										</select>月 </li>
												</ul> <span class="message" style="display: block; padding-top: 5px;"></span> <span class="message" name="gakureki_errmsg" style="padding-top: 0px;">
									
								</span> <span class="message" name="gako_year_errmsg" style="padding-top: 0px;">
									
								</span>
												<!-- <p><a href="/about/chart/" onclick="window.open('/about/chart/',null,'width=640,height=600,left=10,top=10,location=yes,scrollbars=yes,resizable=yes'); return false;" target="_blank">最終学歴早見表</a></p> -->
											</dd>
										</dl>
										<dl name="gakoparent"> <dt>学校名</dt>
											<dd> <span>
									<input type="text" name="gako_name" id="gakureki5" value="" class="" prior="20" data-role="error-display" data-max-length="50" valid_length="100" valid_rule_rt="checkStrCount" valid_rule_focus="clearErrorMsg checkStrCount" valid_rule="checkStrCompatible" alt="最終学歴[学校名]" placeholder="例：○○大学○○学部○○学科" parent="gakoparent" errmsg="gako_errmsg">
								</span> <span class="message" name="gako_errmsg">
									
								</span> </dd>
										</dl>
									</dd>
								</dl>
							</li>
						</ul>
					</div>
					<div class="pt02">
						<ul class="js-licenseBlock">
							<li class="li01" id="skill_license" name="skill_driver_licenseparent">
								<dl class="dl07"> <dt>普通自動車運転免許（第一種）</dt>
									<dd> <span>
							<select name="skill_driver_license" class="" prior="30" data-role="error-display" valid_rule_focus="clearErrorMsg" alt="運転免許の有無" parent="skill_driver_licenseparent" errmsg="skill_driver_license_errmsg">
								<option value="">選択してください</option>
																	<option value="1">もっていない</option>
																	<option value="2">AT免許を持っている</option>
																	<option value="3">MT免許を持っている</option>
								
							</select>
						</span> <span class="message" name="skill_driver_license_errmsg">
							
						</span> </dd>
								</dl>
							</li>
							<li class="li01" name="skill_license_pcparent">
								<dl class="dl08"> <dt>パソコンスキル</dt>
									<dd class="js-cb-pcSkillItem">
										<ul class="radioDesign03">
											<li class="li01"> <label>
									<input type="radio" name="skill_license_pc" value="0" class="" prior="33" data-role="error-display" valid_rule_click="clearErrorMsg" alt="パソコンスキル" parent="skill_license_pcparent" errmsg="skill_license_pc_errmsg">
																		<span>未経験</span>
																		
								</label> </li>
											<li> <label>
									<input type="radio" name="skill_license_pc" value="1" class="" prior="33" data-role="error-display" valid_rule_click="clearErrorMsg" alt="パソコンスキル" parent="skill_license_pcparent" errmsg="skill_license_pc_errmsg">
																		<span>入門：</span>
									<em> インターネットで調べることができる</em>
																		
								</label> </li>
											<li> <label>
									<input type="radio" name="skill_license_pc" value="2" class="" prior="33" data-role="error-display" valid_rule_click="clearErrorMsg" alt="パソコンスキル" parent="skill_license_pcparent" errmsg="skill_license_pc_errmsg">
																		<span>初級：</span>
									<em> タイピングや四則演算（＋,－,×,÷）ができる</em>
																		
								</label> </li>
											<li> <label>
									<input type="radio" name="skill_license_pc" value="3" class="" prior="33" data-role="error-display" valid_rule_click="clearErrorMsg" alt="パソコンスキル" parent="skill_license_pcparent" errmsg="skill_license_pc_errmsg">
																		<span>中級：</span>
									<em> グラフや図を使用した資料が作成出来る</em>
																		
								</label> </li>
											<li> <label>
									<input type="radio" name="skill_license_pc" value="4" class="" prior="33" data-role="error-display" valid_rule_click="clearErrorMsg" alt="パソコンスキル" parent="skill_license_pcparent" errmsg="skill_license_pc_errmsg">
																		<span>上級：</span>
									<em> エクセル関数やパワーポイントを使用した資料の作成がなんなくこなせる</em>
																		
								</label> </li>
										</ul> <span class="message" name="skill_license_pc_errmsg">
							
						</span> </dd>
								</dl>
							</li>
							<li class="li03" id="license_form">
								<dl> <dt>その他資格<span class="span01">＜最大5つ＞</span></dt>
									<dd>
										<ul id="other_skill_node">
											
										</ul>
										<dl class="dl05 js-lb-btnItem" id="btn_other_license"> <dt class="js-lb-btnItemLabel">その他資格の<span class="span01">追加</span></dt>
											<dd>
												<ul class="ul03">
													<li class="li01"><a class="color03 js-lb-removeBtn js-lb-hide">資格・スキルを削除する</a></li>
													<li class="li02"><a id="js-lb-addBtn1" class="color03 js-lb-addBtn">さらに資格・スキルを追加する</a></li>
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
							<li class="li01">
								<dl class="dl11" name="picparent"> <dt>写真</dt>
									<dd style="padding-bottom: 5px; min-height: 214px;">
										<ul class="ul01 js-imageInput">
											<li>写真1</li>
											<li> <span><img id="image01" src="./images/photo_001a.png" class="js-ii-image" prior="31" data-role="error-display" width="120" height="160" alt="写真1" parent="picparent" errmsg="pic01_errmsg" ></span> <label><input type="file" name="pic01" id="pic01" class="js-ii-input">
											<span class="color03">写真を登録する</span></label> <span class="js-ii-hide"></li> <input type="hidden" class="js-file-name" name="pic01_filename" value="" id="pic01_filename"> <input type="hidden" class="js-edit-flg" name="pic01_edit_flg" value="0" id="pic01_edit_flg"> </ul>
										<ul class="ul02 js-imageInput">
											<li>写真2</li>
											<li> <span><img id="image02" src="./images/photo_002a.png" class="js-ii-image" prior="32" data-role="error-display" width="120" height="160" alt="写真2" parent="picparent" errmsg="pic02_errmsg"></span> <label><input type="file" name="pic02" id="pic02" class="js-ii-input">
											<span class="color03">写真を登録する</span></label> <span class="js-ii-hide"></li> <input type="hidden" class="js-file-name" name="pic02_filename" value="" id="pic02_filename"> <input type="hidden" class="js-edit-flg" name="pic02_edit_flg" value="0" id="pic02_edit_flg"> </ul>
										<p class="p03"> <span class="message" style="display: block; padding-top: 5px;"></span> <span class="message" name="pic01_errmsg" style="padding-top: 0px;">
								
							</span> <span class="message" name="pic02_errmsg" style="padding-top: 0px;">
								
							</span> </p>
									</dd>
								</dl>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
        <!-- //member-inputForm -->
        
	</div>
	<!-- //layout-column- -->
	<!-- common-actionButton -->
	<div class="common-actionButton">
		<div class="pattern-1">
			<div class="bg01">
				<div class="pt01">
					<ul>
						<li><input id="updateButton" type="button" value="プロフィールを更新して戻る" class="color01"></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>


<script>
export default {
  name: "Edit",
  data(){
    return{
      msg: "main"
    }
  }
}
</script>


<style scoped>

</style>