# WebRTC
Google开源/跨平台/主要用于浏览器/实时数据传输/音视频引擎
#background
just for study
#note
主要类：mediaStream,RTCPeerConnection,RTCDataChannel
获取设备：navigator.mediaDevices.enumerateDevices() 返回promise对象
获取音视频流：navigator.mediaDevices.getUserMedia(constraints) 返回promise对象
录制：var mediaRecorder = new MediaRecorder(stream.[,options])
mediaRecorder.start(timeslice) timeslice存储时间片段 mediaRecorder.start()
mediaRecorder.ondataavailable时间片段记录完成触发 mediaRecorder.onerror
