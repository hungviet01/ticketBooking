import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import FilterTrips from "../components/Booking/FilterTrips";
import ListTrips from "../components/Booking/ListTrips";
import InputSearchTrip from "../components/Input/InputSearchTrip";
import Loading from "../components/Loading/Loading";
import {getTripPassengerAction} from "../redux/actions/bookingAction";
import "../Sass/css/Booking.css";
export default function Booking(props) {
	let {tripSearch, listTripPassenger, tripByUser, tripRender} = useSelector((state) => state.BookingReducer);
	let {isLoading} = useSelector((state) => state.LoadingReducer);
	const {id} = props.match.params;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTripPassengerAction(id));
	}, []);
	return (
		<Fragment>
			<div className="booking_pages">
				<div className="booking_title mb-5">
					<a href="#"> {/* */}Vé xe khách</a>
					<span>
						{" "}
						&gt; xe đi {tripRender.fromStation} từ {tripRender.toStation}
					</span>
				</div>
				<InputSearchTrip id={id} />
				{isLoading ? (
					<Loading />
				) : (
					<Fragment>
						<a target="_blank" href="#" className="hoanve mb-10">
							Ticket Booking - Người bạn đồng hành trên mọi nẻo đường
							<img src="https://storage.googleapis.com/fe-production/svgIcon/error_outline.svg" alt="150%" />
						</a>
						<div className="grid grid-cols-12">
							<div className="col-span-4">
								<FilterTrips />
							</div>
							<div className="col-span-8">
								<ListTrips param={props.match.params} />
							</div>
						</div>
					</Fragment>
				)}
			</div>
		</Fragment>
	);
}
