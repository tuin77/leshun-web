<script setup lang="ts">
const logo = ref(null);

const open = ref(false);

const isMobile = ref(false);
function openLogoContext() {
	if (isMobile.value) return navigateTo("/");
	open.value = true;
}

onMounted(() => {
	isMobile.value = "ontouchstart" in document.documentElement;
});
</script>

<template>
	<div id="header">
		<div class="nav-warp">
			<div class="xtop" style="background-color: rgb(255, 255, 255)">
				<div class="xtopt">
					<a href="https://www.shengwang.cn/">
						<div class="xtopl"></div>
					</a>
					<div class="xtopz" style="">
						<div class="xtopzcp" id="xtopzcp" style="color: rgb(36, 47, 61)">
							产品
							<div class="x_arrvcp x_zk"></div>
						</div>
						<div class="xjjfa" id="xjjfa" style="color: rgb(36, 47, 61)">
							解决方案
							<div class="x_arrvfa x_zk"></div>
						</div>
						<div class="xtopzlb">
							<a href="https://www.shengwang.cn/usecase/">案例</a>
						</div>
						<div class="xtopzkfz" id="xtopzkfz" style="color: rgb(36, 47, 61)">
							开发者
							<div class="x_arrvkf x_zk"></div>
						</div>

						<div class="xtopzlb" id="xtopzlb" style="color: rgb(36, 47, 61)">
							Demo
							<div class="x_arrvst2 x_zk"></div>
						</div>
						<div class="xtopzsthz" id="xtopzsthz" style="color: rgb(36, 47, 61)">
							生态合作
							<div class="x_arrvst x_zk"></div>
						</div>
						<div class="xtopzlb"><a href="https://www.shengwang.cn/price/">价格</a></div>
						<div class="xgysw" id="xgysw" style="color: rgb(36, 47, 61)">
							关于声网
							<div class="x_arrvgy x_zk"></div>
						</div>
					</div>
					<div class="xtopr">
						<div class="xtoprl">
							<a
								href="https://sso.shengwang.cn/cn/v5/login?_gl=1%2afhuvce%2a_ga%2aMTQwMjcyMDM3OS4xNjg4NjA1ODA2%2a_ga_BFVGG7E02W%2aMTY5MDI0OTcwOS4xNi4xLjE2OTAyNTE1NDEuMC4wLjA."
								>登录</a
							>
						</div>
						<div class="xtoprr">
							<a
								href="https://sso.shengwang.cn/cn/v4/signup/with-sms?_gl=1%2a1le7hzg%2a_ga%2aMTQwMjcyMDM3OS4xNjg4NjA1ODA2%2a_ga_BFVGG7E02W%2aMTY5MDI1MzY0Ny4xNy4xLjE2OTAyNTM2NjEuMC4wLjA."
								>免费体验</a
							>
						</div>
					</div>
				</div>
			</div>
			<div class="xtop2">
				<div class="xtopt">
					<div class="xdnrkfz" id="xdnrkfz" style="display: none">
						<div class="x_tblb2">
							<div class="x_wdang"></div>
							<div class="x_tblbr2">
								<div class="x_tblbrt2">
									<a href="https://doc.shengwang.cn/" target="_blank">文档</a>
								</div>
								<div class="x_tblbrb2">
									RTE 产品/服务的详细说明、SDK 下载、开发指南、示例项目、常见问题解答
								</div>
							</div>
						</div>
						<div class="x_tblb2">
							<div class="x_demoapp"></div>
							<div class="x_tblbr2">
								<div class="x_tblbrt2">
									<a href="https://doc.shengwang.cn/codebox" target="_blank">Demo</a>
								</div>
								<div class="x_tblbrb2">
									RTE产品的演示应用，亲自体验和了解产品的实际效果
								</div>
							</div>
						</div>
						<div class="x_tblb2">
							<div class="x_zxsq"></div>
							<div class="x_tblbr2">
								<div class="x_tblbrt2">
									<a href="https://www.shengwang.cn/cn/community/" target="_blank"
										>在线社区</a
									>
								</div>
								<div class="x_tblbrb2">
									提出问题、分享经验、寻求帮助或与其他用户进行讨论
								</div>
							</div>
						</div>
					</div>
					<div class="xdnrgysw" id="xdnrgysw" style="display: none">
						<div class="xdnrgyswlb">
							<a href="https://www.shengwang.cn/aboutus/">企业介绍</a>
						</div>
						<div class="xdnrgyswlb">
							<a href="https://www.shengwang.cn/news/">新闻中心</a>
						</div>
						<div class="xdnrgyswlb">
							<a href="https://www.shengwang.cn/jointlab/">声网实验室</a>
						</div>
						<div class="xdnrgyswlb">
							<a href="https://www.shengwang.cn/jointlab/rte-standard/">RTC 行业标准</a>
						</div>
						<div class="xdnrgyswlb">
							<a href="https://www.shengwang.cn/compliance/">安全合规</a>
						</div>
						<div class="xdnrgyswlb">
							<a href="https://www.shengwang.cn/corporate-responsibility/">企业责任</a>
						</div>
						<div class="xdnrgyswlb">
							<a href="https://app.mokahr.com/apply/agora/6334#/" target="_blank"
								>加入我们</a
							>
						</div>
					</div>
					<div class="xdnrsthz" id="xdnrsthz" style="display: none">
						<div class="xdnrsthzlb">
							<a href="https://www.shengwang.cn/ecosystem/">
								<div class="x_stjs"></div>
								<div style="float: left">生态介绍</div>
							</a>
						</div>
						<div class="xdnrsthzlb">
							<a href="https://www.shengwang.cn/ecosystem/shengxuan/">
								<div class="x_sxjh"></div>
								<div style="float: left">声选计划</div>
							</a>
						</div>
						<div class="xdnrsthzlb">
							<a href="https://www.shengwang.cn/ecosystem/supersonic/">
								<div class="x_cysjh"></div>
								<div style="float: left">超音速计划</div>
							</a>
						</div>
					</div>

					<div class="xdnrsthz2" id="xdnrsthz2" style="display: none">
						<div class="xdnrsthzlb">
							<a
								href="https://doc.shengwang.cn/codebox?_gl=1*1hp5rsc*_gcl_au*MTExNDM4MjgzMS4xNzI5NjU1ODY0*_ga*NzM2MjM2MDcyLjE3MjkyNDU4ODc.*_ga_BFVGG7E02W*MTczMDE2OTE5OC4xNi4wLjE3MzAxNjkyMDMuMC4wLjA."
								target="_blank"
							>
								<div class="x_demo"></div>
								<div style="float: left">Demo下载</div>
							</a>
						</div>
						<div class="xdnrsthzlb">
							<a href="https://rte-experience.shengwang.cn/" target="_blank">
								<div class="x_tyg"></div>
								<div style="float: left">RTE 体验馆</div>
							</a>
						</div>
					</div>
				</div>

				<div class="xdnrcp" id="xdnrcp" style="display: none">
					<div class="xdnrz">
						<div class="hezi">
							<div class="btnnav">
								<ul class="btn">
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											全部产品
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											实时互动基础能力
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											实时互动扩展能力
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											低代码应用平台
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											云市场
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
								</ul>
							</div>
							<div class="box">
								<ul class="con">
									<li class="current" style="display: none">
										<div class="x_qb">
											<div class="x_qbbt">实时互动基础能力</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/voicecall/">语音通话</a>
												</div>
												<div class="x_qblbb">一对一，多对多人实时语音通话</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/videocall/">视频通话</a>
												</div>
												<div class="x_qblbb">一对一，多对多人实时视频通话</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/live/">直播</a>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_qblbb">
													提供低延时、强同步、大并发、高质量的互动直播能力
												</div>
												<div class="x_qblbz">
													<a
														href="https://www.shengwang.cn/interactive-live-streaming-premium/"
													>
														<div style="float: left">互动直播</div>
														<div class="gd"></div>
													</a>
												</div>
												<div class="x_qblbz">
													<a
														href="https://www.shengwang.cn/interactive-live-streaming-standard/"
													>
														<div style="float: left">极速直播</div>
														<div class="gd"></div>
													</a>
												</div>
												<div class="x_qblbz">
													<a href="https://www.shengwang.cn/fls/">
														<div style="float: left">融合CDN</div>
														<div class="gd"></div>
													</a>
												</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/realtimemessage/"
															>实时消息</a
														>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_qblbb">
													低延时、高并发、高可靠的全球信令与消息云服务
												</div>
											</div>
										</div>
										<div class="x_qb">
											<div class="x_qbbt">实时互动扩展能力</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/agora-analytics/">水晶球</a>
												</div>
												<div class="x_qblbb">实时监控、告警通知、通话调查、数据洞察</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/interactive-whiteboard/"
														>互动白板</a
													>
												</div>
												<div class="x_qblbb">H5 课件、动态PPT、轨迹与音视频同步</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/recording/">实时录制</a>
												</div>
												<div class="x_qblbb">云端录制、本地服务端录制、页面录制</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/ai-engine/">凤鸣 AI 引擎</a>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_qblbb">新一代音频技术智能引擎</div>
												<div class="x_qblbz">
													<a href="https://www.shengwang.cn/3D-spatial/">
														<div style="float: left">空间音频</div>
														<div class="gd"></div>
													</a>
												</div>
												<div class="x_qblbz">
													<a href="https://www.shengwang.cn/AI-denoiser/">
														<div style="float: left">AI降噪</div>
														<div class="gd"></div>
													</a>
												</div>
												<div class="x_qblbz">
													<a href="https://www.shengwang.cn/VirtualSoundCard/">
														<div style="float: left">虚拟声卡2.0</div>
														<div class="gd"></div>
													</a>
												</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<div style="float: left">
														<a target="_blank" href="https://status.shengwang.cn/"
															>Status Page</a
														>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_qblbb">
													集中展示声网主要产品及服务的综合服务质量及可用性信息
												</div>
											</div>
										</div>
										<div class="x_qb">
											<div class="x_qbbt">低代码应用平台</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/flexible-meeting/"
															>灵动会议</a
														>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_qblbb">
													易开发、可扩展、高可靠、优体验的全新会议平台
												</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/agora-flexible-classroom/"
														>灵动课堂</a
													>
												</div>
												<div class="x_qblbb">15 分钟上线自由品牌互动教学平台</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/iot-platform/"
														>灵隼物联网云平台</a
													>
												</div>
												<div class="x_qblbb">「耳聪目明」智能硬件音视频体验升级</div>
											</div>
										</div>
										<div class="x_qb">
											<div class="x_qbbt">云市场</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<div style="float: left">
														<a
															href="https://www.shengwang.cn/cn/marketplace?category=video-effects"
															>视频特效</a
														>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_qblbb">美颜、贴纸、3D特效</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a
														href="https://www.shengwang.cn/cn/marketplace?category=audio-effects"
														>音频特效</a
													>
												</div>
												<div class="x_qblbb">实时变声、音色定制</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/cn/marketplace?category=nlp"
														>自然语言处理</a
													>
												</div>
												<div class="x_qblbb">实时转写、实时翻译</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a
														href="https://www.shengwang.cn/cn/marketplace?category=content-moderation"
														>内容审核</a
													>
												</div>
												<div class="x_qblbb">音频审核、视频审核、多语种审核</div>
											</div>
										</div>
									</li>
									<li style="display: list-item">
										<div class="x_sl">
											<div class="x_sll">
												<div class="x_tblb">
													<div class="x_yyth"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<a href="https://www.shengwang.cn/voicecall/">语音通话</a>
														</div>
														<div class="x_tblbrb">一对一，多对多实时语音通话</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_spth"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<a href="https://www.shengwang.cn/videocall/">视频通话</a>
														</div>
														<div class="x_tblbrb">一对一，多对多实时视频通话</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_jstxim"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<a href="https://www.shengwang.cn/instantmessage/"
																>即时通讯 IM</a
															>
														</div>
														<div class="x_tblbrb">
															单聊、群聊、聊天室、系统通知等 IM 功能
														</div>
													</div>
												</div>
												<div class="x_tblb" style="min-height: 80px">
													<div class="x_yxl"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a href="https://www.shengwang.cn/realtimemessage/"
																	>实时消息</a
																>
															</div>
															<div class="NEW"></div>
														</div>
														<div class="x_tblbrb">
															低延时、高并发、高可靠的全球信令与消息云服务
														</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_js"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<a href="https://www.shengwang.cn/rtsa/">加速</a>
														</div>
														<div class="x_tblbrb">具备 QoS 保障的全球端到端加速服务</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_zb"></div>
													<div class="x_tblbr">
														<div class="x_qblbt">
															<div style="float: left">
																<a href="https://www.shengwang.cn/live/">直播</a>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_qblbb">
															提供低延时、强同步、大并发、高质量的互动直播能力
														</div>
														<div class="x_qblbz">
															<a
																href="https://www.shengwang.cn/interactive-live-streaming-premium/"
															>
																<div style="float: left">互动直播</div>
																<div class="gd"></div>
															</a>
														</div>
														<div class="x_qblbz">
															<a
																href="https://www.shengwang.cn/interactive-live-streaming-standard/"
															>
																<div style="float: left">极速直播</div>
																<div class="gd"></div>
															</a>
														</div>
														<div class="x_qblbz">
															<a href="https://www.shengwang.cn/fls/">
																<div style="float: left">融合CDN</div>
																<div class="gd"></div>
															</a>
														</div>
													</div>
												</div>
											</div>

											<!-- <div class="x_slr">
                                <div class="rmtj">热门推荐</div>
                                <div class="x_tblbyc">
                                    <div class="x_tblbycl"></div>
                                    <div class="x_tblbycr">
                                      <div class="x_tblbycrt">高清升级 5 折起</div>
                                      <div class="x_tblbycrb">低延时、强同步、大并发、高质量的互动</div>
                                      <div class="x_tblbycrz"><div style="float: left;"><a href="https://www.shengwang.cn/campaign/HD-video/">立即体验</a></div><div class="gd"></div></div>
                                    </div>
                                </div>
                            </div> -->
										</div>
									</li>
									<!--
                    <li>
                        <div class="x_tblbqq">
                            <div class="x_yyth"></div>
                            <div class="x_tblbr">
                                <div class="x_tblbrt"><a href="https://www.shengwang.cn/voicecall/">语音通话</a></div>
                                <div class="x_tblbrb">一对一，多人实时语音通话</div>
                            </div>
                        </div>
                        <div class="x_tblbqq">
                            <div class="x_spth"></div>
                            <div class="x_tblbr">
                                <div class="x_tblbrt"><a href="https://www.shengwang.cn/videocall/">视频通话</a></div>
                                <div class="x_tblbrb">一对一，多对多实时视频通话</div>
                            </div>
                        </div>
                        <div class="x_tblbqq">
                            <div class="x_jstxim"></div>
                            <div class="x_tblbr">
                                <div class="x_tblbrt"><a href="https://www.shengwang.cn/instantmessage/">即时通讯 IM</a></div>
                                <div class="x_tblbrb">单聊、群聊、聊天室、系统通知等 IM 功能</div>
                            </div>
                        </div>
                        <div class="x_tblbqq">
                            <div class="x_yxl"></div>
                            <div class="x_tblbr">
                                <div class="x_tblbrt"><div style=" float: left;"><a href="https://www.shengwang.cn/realtimemessage/">实时消息</a></div><div class="NEW"></div></div>
                                <div class="x_tblbrb">低延时、高并发、高可靠的全球信令与消息云服务</div>
                            </div>
                        </div>
                        <div class="x_tblbqq">
                            <div class="x_zb"></div>
                            <div class="x_tblbr">
                                <div class="x_qblbt"><div style=" float: left;"><a href="https://www.shengwang.cn/live/">直播</a></div><div class="hot"></div></div>
                                <div class="x_qblbb">提供低延时、强同步、大并发、高质量的互动直播能力</div>
                                <div class="x_qblbz"><a href="https://www.shengwang.cn/interactive-live-streaming-premium/"><div style="float: left;">互动直播</div><div class="gd"></div></a></div>
                                <div class="x_qblbz"><a href="https://www.shengwang.cn/interactive-live-streaming-standard/"><div style="float: left;">极速直播</div><div class="gd"></div></a></div>
                                <div class="x_qblbz"><a href="https://www.shengwang.cn/fls/"><div style="float: left;">融合CDN</div><div class="gd"></div></a></div>
                            </div>
                        </div>
                        <div class="x_tblbqq">
                            <div class="x_js"></div>
                            <div class="x_tblbr">
                                <div class="x_tblbrt"><a href="https://www.shengwang.cn/rtsa/">加速</a></div>
                                <div class="x_tblbrb">具备 QoS 保障的全球端到端加速服务</div>
                            </div>
                        </div>
                    </li>
                    -->
									<li style="display: none">
										<div class="x_sl">
											<div class="x_sll">
												<div class="x_tblb">
													<div class="x_sjq"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a href="https://www.shengwang.cn/agora-analytics/"
																	>水晶球</a
																>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_tblbrb">
															实时监控、告警通知、通话调查、数据洞察
														</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_hdbb"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<a href="https://www.shengwang.cn/interactive-whiteboard/"
																>互动白板</a
															>
														</div>
														<div class="x_tblbrb">H5 课件、动态PPT、轨迹与音视频同步</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_sslz"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<a href="https://www.shengwang.cn/recording/">实时录制</a>
														</div>
														<div class="x_tblbrb">云端录制、本地服务端录制、页面录制</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_fmyq"></div>
													<div class="x_tblbr">
														<div class="x_qblbt">
															<div style="float: left">
																<a href="https://www.shengwang.cn/ai-engine/"
																	>凤鸣 AI 引擎</a
																>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_qblbb">新一代音频技术智能引擎</div>
														<div class="x_qblbz">
															<a href="https://www.shengwang.cn/3D-spatial/">
																<div style="float: left">空间音频</div>
																<div class="gd"></div>
															</a>
														</div>
														<div class="x_qblbz">
															<a href="https://www.shengwang.cn/AI-denoiser/">
																<div style="float: left">AI降噪</div>
																<div class="gd"></div>
															</a>
														</div>
														<div class="x_qblbz">
															<a href="https://www.shengwang.cn/VirtualSoundCard/">
																<div style="float: left">虚拟声卡2.0</div>
																<div class="gd"></div>
															</a>
														</div>
													</div>
												</div>
												<!-- 20241107 -->
												<div class="x_tblb">
													<div class="x_status"></div>
													<div class="x_tblbr" style="float: none">
														<div class="x_tblbrt">
															<div style="float: left">
																<a href="https://status.shengwang.cn/" target="_blank"
																	>Status Page</a
																>
															</div>
															<div class="NEW"></div>
														</div>
														<div class="x_tblbrb">
															集中展示声网主要产品及服务的综合服务质量及可用性信息
														</div>
													</div>
												</div>
											</div>
											<!-- <div class="x_slr">
                                <div class="rmtj">热门推荐</div>
                                <div class="x_tblbyc">
                                    <div class="x_tblbycl"></div>
                                    <div class="x_tblbycr">
                                      <div class="x_tblbycrt">高清升级 5 折起</div>
                                      <div class="x_tblbycrb">低延时、强同步、大并发、高质量的互动</div>
                                      <div class="x_tblbycrz"><div style="float: left;">立即体验</div><div class="gd"></div></div>
                                    </div>
                                </div>
                            </div> -->
										</div>
									</li>
									<li style="display: none">
										<div class="x_sl">
											<div class="x_sll">
												<div class="x_tblb">
													<div class="x_ldkt"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a
																	href="https://www.shengwang.cn/agora-flexible-classroom/"
																	>灵动课堂</a
																>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_tblbrb">15 分钟上线自由品牌互动教学平台</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_wlwpt"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a href="https://www.shengwang.cn/iot-platform/"
																	>灵隼物联网云平台</a
																>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_tblbrb">「耳聪目明」智能硬件音视频体验升级</div>
													</div>
												</div>
											</div>
											<!-- <div class="x_slr">
                                <div class="rmtj">热门推荐</div>
                                <div class="x_tblbyc">
                                    <div class="x_tblbycl"></div>
                                    <div class="x_tblbycr">
                                      <div class="x_tblbycrt">高清升级 5 折起</div>
                                      <div class="x_tblbycrb">低延时、强同步、大并发、高质量的互动</div>
                                      <div class="x_tblbycrz"><div style="float: left;"><a href="https://www.shengwang.cn/campaign/HD-video/">立即体验</a></div><div class="gd"></div></div>
                                    </div>
                                </div>
                            </div> -->
										</div>
									</li>
									<li style="display: none">
										<div class="x_sl">
											<div class="x_sll">
												<div class="x_tblb">
													<div class="x_sptx"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a
																	href="https://www.shengwang.cn/cn/marketplace?category=video-effects"
																	>视频特效</a
																>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_tblbrb">美颜、贴纸、3D特效</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_yptx"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a
																	href="https://www.shengwang.cn/cn/marketplace?category=audio-effects"
																	>音频特效</a
																>
															</div>
															<div class="NEW"></div>
														</div>
														<div class="x_tblbrb">实时变声、音色定制</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_zryy"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a
																	href="https://www.shengwang.cn/cn/marketplace?category=nlp"
																	>自然语言处理</a
																>
															</div>
															<div class="NEW"></div>
														</div>
														<div class="x_tblbrb">实时转写、实时翻译</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_nrsh"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a
																	href="https://www.shengwang.cn/cn/marketplace?category=content-moderation"
																	>内容审核</a
																>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_tblbrb">音频审核、视频审核、多语种审核</div>
													</div>
												</div>
											</div>
											<!-- <div class="x_slr">
                                <div class="rmtj">热门推荐</div>
                                <div class="x_tblbyc">
                                    <div class="x_tblbycl"></div>
                                    <div class="x_tblbycr">
                                      <div class="x_tblbycrt">高清升级 5 折起</div>
                                      <div class="x_tblbycrb">低延时、强同步、大并发、高质量的互动</div>
                                      <div class="x_tblbycrz"><div style="float: left;"><a href="https://www.shengwang.cn/campaign/HD-video/">立即体验</a></div><div class="gd"></div></div>
                                    </div>
                                </div>
                            </div> -->
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="xdnrjjfa" id="xdnrjjfa" style="display: block">
					<div class="xdnrz">
						<div class="hezi">
							<div class="btnnav">
								<ul class="btn">
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											Hot &amp; New <i class="hot1"></i>
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											出海
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											K歌 &amp; 语聊
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											直播
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											社交
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											游戏
										</div>
										<div class="zctb" style="display: none"></div>
									</li>

									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											AIGC
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											在线教育
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											智能硬件
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
									<li>
										<div class="zcwz" style="background: none; color: rgb(36, 47, 61)">
											数字化转型
										</div>
										<div class="zctb" style="display: none"></div>
									</li>
								</ul>
							</div>
							<div class="box">
								<ul class="con">
									<!-- hot&new -->
									<li class="current" style="display: block">
										<div class="bannerList">
											<a href="https://www.shengwang.cn/solution/global/"
												><img
													src="https://www.shengwang.cn/documents/link/LD223F2FDAEC1BACC7565F7614CFFD9FF5406402D44D/file/D7B4656F29891550FD0EF6C2133C768FCB78E64D7547/_1.png"
													alt=""
											/></a>
											<a href="https://www.shengwang.cn/solution/hd-video/"
												><img
													src="https://www.shengwang.cn/documents/link/LD387495B4EA94D36F0572370853C6BDF34865CDF80F/file/D75EB7C7CE7E6A5245C977AC05558ECD0FC91807CA7C/_2.png"
													alt=""
											/></a>
											<a href="https://www.shengwang.cn/solution/social/"
												><img
													src="https://www.shengwang.cn/documents/link/LD2D1A6814E7F419ACC5953907B4EA30B5A0DEA7EC73/file/D7C1BC145EDFBD8891D69899C41E8ED6B1904558D410/_3.png"
													alt=""
													style="margin-right: 0"
											/></a>
											<a href="https://www.shengwang.cn/solution/aigc/"
												><img
													src="https://web-cdn.agora.io/doc-cms/uploads/1730185114817-aigc.png"
													alt=""
											/></a>
											<a href="https://www.shengwang.cn/solution/sports-streaming/"
												><img
													src="https://www.shengwang.cn/documents/link/LDB6AB2BC74D642F2FD883EB7F310B99B34BEB980925/file/DC8833611CD75B94CE0C2E8A677E7D6CB6B9F7BE060C/_5.png"
													alt=""
											/></a>
											<a href="https://www.shengwang.cn/solution/game/"
												><img
													src="https://www.shengwang.cn/documents/link/LDF6CADCA649C8491802459998280B7019FC117E0585/file/D0F28489285E2A659AFB2F0350D65F8F1495FA06D2A4/_6.png"
													alt=""
													style="margin-right: 0"
											/></a>
										</div>
									</li>
									<!-- 出海 -->
									<li style="display: none">
										<div class="x_sl">
											<div class="x_tblbqq">
												<div class="x_sdyl"></div>
												<div class="x_tblbr">
													<div class="x_tblbrt">
														<a href="https://www.shengwang.cn/solution/voicechat/"
															>语聊房</a
														>
													</div>
													<div class="x_tblbrb">更纯净好玩、沉浸动听的语音互动体验</div>
												</div>
											</div>
											<div class="x_tblbqq">
												<div class="x_spzbcjhz"></div>
												<div class="x_tblbr">
													<div class="x_tblbrt">
														<a href="https://www.shengwang.cn/solution/hd-video/"
															>秀场直播</a
														>
													</div>
													<div class="x_tblbrb">人更美、物更真，开播看播更流畅</div>
												</div>
											</div>
											<div class="x_tblbqq">
												<div class="x_sj"></div>
												<div class="x_tblbr">
													<div class="x_tblbrt">
														<div style="float: left">
															<a href="https://www.shengwang.cn/solution/social/"
																>1v1 社交</a
															>
														</div>
														<div class="hot"></div>
													</div>
													<div class="x_tblbrb">热门吸金玩法，“面对面” 心动体验</div>
												</div>
											</div>
											<div class="x_tblbqq">
												<div class="x_zxkgf"></div>
												<div class="x_tblbr">
													<div class="x_tblbrt">
														<a href="https://www.shengwang.cn/solution/online-karaoke/"
															>K 歌 &amp; 合唱</a
														>
													</div>
													<div class="x_tblbrb">
														2.5h 快速构建合唱/抢唱/接唱等多丰富玩法
													</div>
												</div>
											</div>
											<div class="x_tblbqq">
												<div class="x_hdyx"></div>
												<div class="x_tblbr">
													<div class="x_tblbrt">
														<div style="float: left">
															<a href="https://www.shengwang.cn/solution/meta-igame/"
																>弹幕互动游戏</a
															>
														</div>
														<div class="NEW"></div>
													</div>
													<div class="x_tblbrb">独家游戏资源储备，移动端也能随时开播</div>
												</div>
											</div>
											<div class="x_tblbqq">
												<div class="x_aigc"></div>
												<div class="x_tblbr">
													<div class="x_tblbrt">
														<div style="float: left">
															<a href="https://www.shengwang.cn/solution/aigc/">AIGC</a>
														</div>
														<div class="hot"></div>
													</div>
													<div class="x_tblbrb">AI 互动更低延时，完整方案易开发</div>
												</div>
											</div>
										</div>
									</li>
									<!-- K歌&语聊 -->
									<li style="display: none">
										<div class="x_tblbqq">
											<div class="x_zxkgf"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/online-karaoke/"
														>在线 K 歌 &amp; 合唱</a
													>
												</div>
												<div class="x_tblbrb">
													2.5h 快速构建合唱/抢唱/接唱等多丰富玩法
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_sdyl"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/voicechat/"
														>语聊房</a
													>
												</div>
												<div class="x_tblbrb">更纯净好玩、沉浸动听的语音互动体验</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/game/">游戏开黑</a>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">
													范围语音+空间音频，听声辨位 “吃鸡” 无压力
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_aigc"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/aigc/">AI 陪聊</a>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">真实沉浸的虚拟语聊，快速响应更有趣</div>
											</div>
										</div>
									</li>
									<!-- 直播 -->
									<li style="display: none">
										<div class="x_tblbqq">
											<div class="x_spzbcjhz"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/hd-video/"
														>秀场直播</a
													>
												</div>
												<div class="x_tblbrb">人更美、物更真，开播看播更流畅</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_ds"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/ecommerce/"
														>电商直播</a
													>
												</div>
												<div class="x_tblbrb">覆盖独立站、自建站多类平台，带货更省心</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_sszb"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/sports-streaming/"
															>赛事直播</a
														>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">延时低至500ms，安全稳定更高清</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/game/">游戏直播</a>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">更低性能消耗，4K 60 帧超清画面不卡不晃</div>
											</div>
										</div>
									</li>
									<!-- 社交 -->
									<li style="display: none">
										<div class="x_tblbqq">
											<div class="x_sj"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/social/"
															>1v1 视频</a
														>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_tblbrb">随机匹配或主动邀约，极速出图秒接通</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_sj"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/social/">视频相亲</a>
												</div>
												<div class="x_tblbrb">
													多方高清视频连麦，观众围观也可实时送祝福
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_sj"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/social/">1v1 语音</a>
												</div>
												<div class="x_tblbrb">丝滑接通，支持美声变声趣味玩法</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_sj"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/social/">互动播客</a>
												</div>
												<div class="x_tblbrb">
													一键加入兴趣/话题式开放对谈，听众随时上麦
												</div>
											</div>
										</div>
									</li>
									<!-- 游戏 -->
									<li style="display: none">
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/game/">游戏语音</a>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">AI 降噪+回声消除，更纯净的小队语音交流</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/game/">游戏开黑</a>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">
													范围语音+空间音频，听声辨位 “吃鸡” 无压力
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/game/">游戏直播</a>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">更低性能消耗，4K 60 帧超清画面不卡不晃</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/game/">游戏陪玩</a>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">
													虚拟声卡加持超高音质，大神 “带飞” 更好玩
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/meta-igame/"
															>弹幕互动游戏</a
														>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">独家游戏资源储备，移动端也能随时开播</div>
											</div>
										</div>
									</li>
									<!-- AIGC -->
									<li style="display: none">
										<div class="x_tblbqq">
											<div class="x_aigc"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/aigc/">语音助手</a>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_tblbrb">丰富的人设性格，实时问答支持随时打断</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_aigc"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/aigc/">口语老师</a>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">大模型灵活可选，多语种教学体验更自然</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_aigc"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/aigc/">AI 陪聊</a>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">24h 无缝语音陪伴，专属定制更懂你</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_aigc"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/aigc/">游戏陪玩</a>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">支持单人/多人游戏，AI玩家全程在线</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yzb"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/meta/"
															>Meta 元宇宙</a
														>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">海量 3D 炫酷场景，Z 世代更爱玩</div>
											</div>
										</div>
									</li>
									<!-- 在线教育 -->
									<li class="" style="display: none">
										<div class="x_tblbqq">
											<div class="x_jysq"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/education-engine/"
															>教育超级双擎</a
														>
													</div>
													<!-- <div class="hot"></div> -->
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">RTC+AI，体验丝滑流畅，创新互动模式</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_kjy"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/education/"
														>K12 教育</a
													>
												</div>
												<div class="x_tblbrb">高质量音视频服务，在线教育班型全覆盖</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_zycrjy"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/vocation/"
														>职业 &amp; 成人教育</a
													>
												</div>
												<div class="x_tblbrb">
													丰富的功能组件，支持低代码接入，成本灵活可控
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_jyxxh"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a
														href="https://www.shengwang.cn/solution/education-informatization/"
														>智慧教室</a
													>
												</div>
												<div class="x_tblbrb">3A 智能算法效果更优，突破硬件设备限制</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_fmyq"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/CloudStreaming/"
														>云直播教学</a
													>
												</div>
												<div class="x_tblbrb">灵活接入互动方案，流畅稳定，质量透明</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_ldkt"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt"><a href="#">素质教育</a></div>
												<div class="x_tblbrb">深度还原线下体验，紧密贴合业务场景</div>
												<div class="x_tblbycrz">
													<a href="https://www.shengwang.cn/solution/music/">
														<div style="float: left">在线音乐</div>
														<div class="gd"></div>
													</a>
												</div>
												<div class="x_tblbycrz">
													<a href="https://www.shengwang.cn/solution/arts/">
														<div style="float: left">在线美术</div>
														<div class="gd"></div>
													</a>
												</div>
												<div class="x_tblbycrz">
													<a href="https://www.shengwang.cn/solution/stem/">
														<div style="float: left">在线STEM</div>
														<div class="gd"></div>
													</a>
												</div>
											</div>
										</div>
									</li>
									<!-- 智能硬件 -->
									<li style="display: none">
										<div class="x_tblbqq">
											<div class="x_zhrj"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/smarthome/"
															>智慧人居</a
														>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_tblbrb">语音双讲，实时监控，IPC 设备“耳聪目明”</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_zncx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/smartvehicles/"
														>智能出行</a
													>
												</div>
												<div class="x_tblbrb">无人机高清图传，车载远程语音互动</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_zncd"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/smartdevices/"
															>智能穿戴</a
														>
													</div>
													<!-- <div class="hot"></div> -->
												</div>
												<div class="x_tblbrb">手表低功耗流畅通话，AR多人远程协作</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_pxck"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/teleoperation/"
														>平行操控</a
													>
												</div>
												<div class="x_tblbrb">
													无人值守设备应急接管，高危作业和远程服务
												</div>
											</div>
										</div>
									</li>
									<!-- 数字化转型 -->
									<li style="display: none">
										<div class="x_tblbqq">
											<div class="x_xtbg"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a
															href="https://www.shengwang.cn/solution/enterprise-collaboration/"
															>协同办公</a
														>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_tblbrb">视频会议、企业直播、工业协作、远程招聘</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_zxjr"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/finance/"
														>在线金融</a
													>
												</div>
												<div class="x_tblbrb">
													全渠道音视频接入，视频客服、智能双录等全场景
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yl"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/online-health/"
														>远程医疗</a
													>
												</div>
												<div class="x_tblbrb">
													快速构建远程问诊、医疗会议、手术示教等场景
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_rtcsyhpt"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/pri-rtn/"
														>RTC私有化平台</a
													>
												</div>
												<div class="x_tblbrb">
													支持专网部署，10 分钟构建企业级专有平台
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
<style>
.xtop {
	width: 100%;
	height: 64px;
	line-height: 64px;
	background: #ffffff;
	position: fixed;
	top: 0;
	box-shadow: 0px 4px 16px 0px rgba(31, 35, 37, 0.11);
	z-index: 6666;
}
.xtopt {
	max-width: 1200px;
	height: 64px;
	margin: 0 auto;
}
.xtopl {
	float: left;
	cursor: pointer;
	background: url(/logos/logo.svg) no-repeat left center;
	width: 200px;
	height: 54px;
	margin-top: 8px;
}
.xtopz {
	float: left;
}
.xtopr {
	float: right;
	margin-top: 16px;
}
.xtopzcp {
	cursor: pointer;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	margin-left: 12px;
	padding: 0px 15px 0px 15px;
	float: left;
}
.x_zk {
	width: 16px;
	height: 16px;
	float: right;
	margin-top: 24px;
	margin-left: 5px;
	background: url(https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/zk.svg)
		center top no-repeat;
	background-size: 16px 16px;
	transition-duration: 0.5s;
}
.xjjfa {
	cursor: pointer;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	padding: 0px 15px 0px 27px;
	float: left;
}
.xtopzlb {
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	margin-left: 12px;
	padding: 0px 15px 0px 15px;
	float: left;
}
.xtopzkfz {
	cursor: pointer;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	margin-left: 12px;
	padding: 0px 15px 0px 15px;
	float: left;
}
.xtopzlb {
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	margin-left: 12px;
	padding: 0px 15px 0px 15px;
	float: left;
}
.xtopzsthz {
	cursor: pointer;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	margin-left: 12px;
	padding: 0px 15px 0px 15px;
	float: left;
}
.xtopzlb {
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	margin-left: 12px;
	padding: 0px 15px 0px 15px;
	float: left;
}
.xgysw {
	cursor: pointer;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	margin-left: 12px;
	padding: 0px 15px 0px 15px;
	float: left;
}

.xtoprl {
	float: left;
	color: #242f3d;
	height: 32px;
	line-height: 32px;
	margin-right: 24px;
}
.xtoprr {
	float: right;
	width: 90px;
	height: 32px;
	line-height: 32px;
	text-align: center;
	background: linear-gradient(135deg, #5cc9ff 0%, #099dfd 100%);
	color: #ffffff;
	border-radius: 4px;
}
.xtoprr a {
	color: #ffffff;
	display: block;
	width: 90px;
	height: 32px;
}
</style>
<style>
.xtop2 {
	width: 100%;
	height: auto;
	position: fixed;
	top: 64px;
	z-index: 666;
}
.xtopt {
	max-width: 1200px;
	height: 64px;
	margin: 0 auto;
}
.xdnrcp {
	width: 100%;
	height: auto;
	position: fixed;
	top: 64px;
	background: #f8f9fa;
	z-index: 5;
	display: none;
}
.xdnrjjfa {
	width: 100%;
	height: auto;
	position: fixed;
	top: 64px;
	background: #f8f9fa;
	z-index: 5;
	display: none;
}
</style>
