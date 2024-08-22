const { useState, useRef, useEffect } = require("react")

const useMediaStream=()=>{
    const [state,setstate] = useState(null);
    const isStreamSet =useRef(false)

    useEffect(()=>{
        if(isStreamSet.current) return;
        isStreamSet.current = true;

        (async function initStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio:true,
                    video:true,
                })
                console.log("setting your stream")
                setstate(stream)

            } catch (error) {
                console.log("error in media navigator ", error)
            }
        })()
    },[])
    return {
        stream:state
    }
}

export default useMediaStream