import PlayeluLink from "../pages/banner/playeluLink";
import UrlRescusive from "../UrlRescusive";
import _ from "lodash";


export default function Footer(props) {
    const { urlApi } = props

    return (
        <UrlRescusive data={props}>
            <div className='footer'>
                <PlayeluLink></PlayeluLink>
                <div className='policy'>
                    <a
                        href={_.isEmpty(urlApi) ? '' : urlApi.docs.privacyPolicy}
                        target='_blank'>
                        <span>
                            Privacy Policy
                        </span>
                    </a>
                    <span>|</span>
                    <a
                        href={_.isEmpty(urlApi) ? '' : urlApi.docs.conditions}
                        target='_blank'>
                        <span>
                            Terms & Conditions
                        </span>
                    </a>
                </div>
                <span className='version'>v0.6 - 20220117</span>
            </div>
        </UrlRescusive>
    )


}
