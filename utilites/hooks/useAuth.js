import { useSelector } from "react-redux";
import { getIsRegisterFailed } from "../../redux/auth/selectors";

export const useAuth = () => {
	const isRegisterFailed = useSelector(getIsRegisterFailed);

	return {
		isRegisterFailed,
	};
};
