import React from 'react'
import { useUserAgent } from 'next-useragent'

const Hakkimizda = (props) => {
    let ua;
    if (props.uaString) {
        ua = useUserAgent(props.uaString)
    } else {
        ua = useUserAgent(window.navigator.userAgent)
    }
    const { isMobile } = useUserAgent(props.uaString)
    console.log('isMobile: ', isMobile);
    return (
        <div>
            <p>{ua.source}</p>
            {ua.isMobile ? (
                <div>Mobil oldu</div>
            ) : (
                <div>Desktop oldu</div>
            )}
        </div>
    )
}

export function getServerSideProps(context) {
    return {
        props: {
            uaString: context.req.headers['user-agent']
        }
    }
}

export default Hakkimizda