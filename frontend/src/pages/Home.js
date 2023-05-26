import React from "react";
import InputSearchTrip from "../components/Input/InputSearchTrip";
import Slider from "react-slick";
import {List, Card} from "antd";
import "../Sass/css/Home.css";
export default function Home() {
	const data = [
		{
			title: "Momo đặt vé nhanh ,giá cạnh tranh",
			img: "./images/slide1.png",
		},
		{
			title: "Vui lễ thả ga, giảm ngay 30% khi bạn thanh toán bằng VNPAY",
			img: "./images/slide2.png",
		},
		{
			title: "mua vé xe phương trang giảm ngay 25k + voucher 15k từ đơn hàng 125k ",
			img: "./images/slide4.png",
		},
	];
	const settings = {
		className: "center",
		infinite: true,
		autoplay: true,
		slidesToShow: 3,
		swipeToSlide: true,
	};
	return (
		<>
			<div className="home_banner">
				<img src="./images/banner1.png" alt="123" className="img_banner" />
				<div className="home_content">
					<div className="home_around w-full">
						<div className="title_banner">
							<a href="#" target="_blank" rel="noreferrer">
								<h2 className="homepage__Title-bs2n93-3 LVkvx">Ticket Booking - Người bạn đồng hành trên mọi hành trình</h2>
							</a>
						</div>
					</div>
					<div className="home_search_content w-full">
						<InputSearchTrip />
					</div>
				</div>
			</div>
			<div className="home_slide">
				<div className="home_slide_content">
					<h2 className="home_slide_title mt-5">Ưu đãi nổi bật</h2>
					<div className="home_slide_carousel">
						<Slider {...settings} className="slide_main">
							<div>
								<a href="#">
									<img src="./images/slide1.png" alt="123" />
								</a>
							</div>
							<div>
								<a href="#">
									<img src="./images/slide2.png" alt="123" />
								</a>
							</div>
							<div>
								<a href="#">
									<img src="./images/slide4.png" alt="123" />
								</a>
							</div>
							<div>
								<a href="#">
									<img src="./images/slide3.png" alt="123" />
								</a>
							</div>
						</Slider>
					</div>
				</div>

				<div className="home_slide_content2" id="news">
					<h2 className="home_slide_title">Bài viết nổi bật</h2>
					<List
						grid={{gutter: 16, column: 3}}
						dataSource={data}
						renderItem={(item) => (
							<List.Item>
								<Card style={{height: "290px"}} title={<img src={item.img} style={{height: "200px", width: "100%"}} alt />}>
									<p className="font-bold text-sm"> {item.title}</p>
								</Card>
							</List.Item>
						)}
					/>
					,
				</div>

				<div className="home_slide_content3">
					<h2 className="home_slide_title">Nền tảng kết nối người dùng và nhà xe</h2>
					<div className="seo-content">
						<div className="card">
							<div className="icon-container">
								<img className=" lazyloaded" data-src="https://www.svgrepo.com/show/499725/the-bus.svg" src="https://www.svgrepo.com/show/499725/the-bus.svg" alt="busCar-icon" width={48} height={48}/>
							</div>
							<div className="card-content">
								<p className="base__Headline-sc-1tvbuqk-7 OkeDq color--light-dark">1500+ nhà xe chất lượng cao</p>
								<p className="base__Body02-sc-1tvbuqk-14 VqdXU color--medium-sub">4000 tuyến đường trên toàn quốc, chủ động và đa dạng lựa chọn.</p>
							</div>
						</div>
						<div className="card">
							<div className="icon-container">
								<img className=" lazyloaded" data-src="https://www.svgrepo.com/show/493765/ticket.svg" src="https://www.svgrepo.com/show/493765/ticket.svg" alt="easybook-icon"width={48} height={48} />
							</div>
							<div className="card-content">
								<p className="base__Headline-sc-1tvbuqk-7 OkeDq color--light-dark">Đặt vé dễ dàng</p>
								<p className="base__Body02-sc-1tvbuqk-14 VqdXU color--medium-sub">Đặt vé chỉ với 30s. Chọn xe yêu thích cực nhanh và thuận tiện.</p>
							</div>
						</div>
						<div className="card">
							<div className="icon-container">
								<img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/svgIcon/completement-icon.svg" src="https://storage.googleapis.com/fe-production/svgIcon/completement-icon.svg" alt="guarantee-icon" />
							</div>
							<div className="card-content">
								<p className="base__Headline-sc-1tvbuqk-7 OkeDq color--light-dark">Đảm bảo có vé</p>
								<p className="base__Body02-sc-1tvbuqk-14 VqdXU color--medium-sub"> Ticket Booking đảm bảo có vé, mang đến hành trình trọn vẹn.</p>
							</div>
						</div>
						<div className="card">
							<div className="icon-container">
								<img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/svgIcon/coupon-icon.svg" src="https://storage.googleapis.com/fe-production/svgIcon/coupon-icon.svg" alt="deal-icon" />
							</div>
							<div className="card-content">
								<p className="base__Headline-sc-1tvbuqk-7 OkeDq color--light-dark">Nhiều ưu đãi</p>
								<p className="base__Body02-sc-1tvbuqk-14 VqdXU color--medium-sub">Hàng ngàn ưu đãi độc quyền tại Ticket Booking</p>
							</div>
						</div>
					</div>
				</div>
				<div className="home_slide_content5" id="station">
					<h2 className="home_slide_title mt-5">Bến xe nổi bật</h2>
					<div className="grid grid-cols-4 gap-20">
						<a
							href="#"
							data-bg="https://meeymap.com/tin-tuc/wp-content/uploads/2022/11/Nhung-dich-vu-co-1%E2%80%930%E2%80%932-cua-ben-xe-trung-tam-Da-Nang.png"
							className="BusStationCard__Wrapper-sc-759o96-0 kKZSxH lazyloaded"
							style={{
								backgroundImage: 'url("https://meeymap.com/tin-tuc/wp-content/uploads/2022/11/Nhung-dich-vu-co-1%E2%80%930%E2%80%932-cua-ben-xe-trung-tam-Da-Nang.png")',
							}}
						>
							<header className="BusStationCard__Header-sc-759o96-1 iSiVXT">Bến xe Đà Nẵng</header>
						</a>

						<a
							href="#"
							data-bg="https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_550,h_365/https://chothuexemientrung.com/wp-content/uploads/2018/05/lich-trinh-cac-tuyen-xe-phia-bac-hue-ben-xe-vinh-nghe-an.jpg"
							className="BusStationCard__Wrapper-sc-759o96-0 kKZSxH lazyloaded"
							style={{
								backgroundImage: 'url("https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_550,h_365/https://chothuexemientrung.com/wp-content/uploads/2018/05/lich-trinh-cac-tuyen-xe-phia-bac-hue-ben-xe-vinh-nghe-an.jpg")',
							}}
						>
							<header className="BusStationCard__Header-sc-759o96-1 iSiVXT">Bến xe Huế</header>
						</a>
						<a
							href="#"
							data-bg="https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2021/10/16/photo1634363077947-16343630780822104981950.jpg"
							className="BusStationCard__Wrapper-sc-759o96-0 kKZSxH lazyloaded"
							style={{
								backgroundImage: 'url("https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2021/10/16/photo1634363077947-16343630780822104981950.jpg")',
							}}
						>
							<header className="BusStationCard__Header-sc-759o96-1 iSiVXT">Bến xe Miền Tây</header>
						</a>
						<a
							href="#"
							data-bg="https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg"
							className="BusStationCard__Wrapper-sc-759o96-0 kKZSxH lazyloaded"
							style={{
								backgroundImage: 'url("https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg")',
							}}
						>
							<header className="BusStationCard__Header-sc-759o96-1 iSiVXT">Bến xe Mỹ Đình</header>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
