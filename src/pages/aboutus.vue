<template>
	<div class="bg-white">
		<section
			class="hero relative h-[900px] bg-cover bg-center"
			style="background-image: url(/images/about-intro-bg.png)"
		>
			<div class="ml-[185px] pt-[322px]">
				<h1 class="flex text-white text-[60px] font-semibold ml-[313px]">
					关于
					<span class="w-[120px] h-[84px] bg-[#DA5302]">乐舜</span>
				</h1>
				<p class="w-[940px] text-white text-[33px] leading-[46px] text-center mt-6">
					乐舜是一家集成硬件能力、设备连接能力、硬件实时管控能力、系统裁剪能力、支付集成能力软件开发能力的高科技公司。
				</p>
			</div>
		</section>

		<section
			class="h-[800px] w-full bg-cover bg-center"
			style="
				background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/de7f24191941407f8e254a515c22a9cb_mergeImage.png);
			"
		>
			<div class="h-full w-full bg-[rgba(227,227,227,0.6)] flex flex-col items-center">
				<h2 class="text-[#333] text-[60px] font-semibold mt-[129px]">公司简介</h2>
				<p
					class="max-w-5xl text-[#333] text-[24px] text-justify mt-14"
					style="line-height: 1.6; text-indent: 2em"
				>
					乐舜信科2017年创立于互联网之都杭州，是一家集成硬件能力、设备连接能力、硬件实时管控能力、系统裁剪能力、支付集成能力软件开发能力的高科技公司。针对行业需求打造出了人脸智能团餐机、智慧收银机、智慧门禁机、视频通话机、自助牛奶机、工业边缘计算网关等多款硬件产品；校园/企业团餐系统、家校视讯服务系统、门禁考勤系统、园区能耗管理系统、纺织工业智能生产系统等行业解决方案。我们坚守不断突破和创新的价值观。以智能物联网技术助力企业提升管理和经营的使命，在简单正直、协作互助的环境中不断找寻真正的产品价值。通过我们创造的智慧数字解决方案为校园/企业管理降本增效，携手合作伙伴共同实现更多场景的联网化、服务化和智能化，携手共筑中国物联网建设的基石。
				</p>
			</div>
		</section>

		<section
			class="honors w-full bg-cover bg-center"
			style="background-image: url(/images/about-honors-bg.png)"
		>
			<div class="max-w-5xl mx-auto text-center pt-18">
				<h2 class="text-white text-[60px] font-semibold">关于乐舜</h2>
				<img class="max-w-4xl mt-[62px] mx-auto" src="/images/about-certificate.png" />
				<img class="mt-10" src="/images/about-certificate1.png" />
			</div>
			<div class="max-w-5xl mx-auto pb-16">
				<div class="flex items-center mx-auto justify-center my-8">
					<img class="w-12 h-12" src="/images/about-honors-icon.png" />
					<h2 class="text-white text-[28px] font-semibold mb-0 ml-4">额外荣誉</h2>
				</div>
				<div
					class="honor-list text-white text-[24px] grid grid-cols-[3fr_4fr_2fr] gap-y-4"
				>
					<span>国家高新技术企业</span>
					<span>杭州市物联网行业协会会员单位</span>
					<span>虹软战略伙伴</span>
					<span>浙江省科技型中小企业</span>
					<span>杭州市经信委数字化工程服务商</span>
					<span>阿里云IOT合作伙伴</span>
					<span>杭州市雏鹰计划企业</span>
					<span>深圳市智慧安防商会副会长单位</span>
					<span>ICA联盟成员</span>
					<span>杭州市高新技术企业</span>
					<span>网易疾风制造IOT联盟成员</span>
					<!-- More honors... -->
				</div>
			</div>
		</section>

		<section class="mx-auto max-w-5xl mb-24">
			<h2 class="text-[#333] text-[60px] font-semibold text-center mt-17 mb-16">
				合作伙伴
			</h2>
			<img src="/images/about-partners.png" alt="" srcset="" />
		</section>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	navPosition: 5
});
</script>

<style lang="scss" scoped>
/* 移除了大部分自定义样式，改用 Tailwind 类名 */
</style>
