let PluginName = 'PlayerConnectInfo'// LiteLoader-AIDS automatic generated
/// <reference path="c:\Users\matebook 16s\.vscode\LLSE-Aids本地库目录/dts/helperlib/src/index.d.ts"/> 

ll.registerPlugin(
    /* name */ "PlayerConnectInfo",
    /* introduction */ "",
    /* version */ [2,0,1],
    /* otherInformation */ "PlayerConnectInfo"
); 



let Version = '2.0.0'  
let Author = 'CreeperAWA'  
let PlayerConnectInfoFilePath = "./plugins/PlayerConnectInfo/PlayerData/"  

function GetPlayerConnectInfo(Player) {  
    let dv = Player.getDevice();  // 定义 dv  
  
    var PlayerConnectInfo = {  
        Name: Player.name, // 玩家名称  
        XUID: Player.xuid, // 玩家XUID  
        UUID: Player.uuid,  // 玩家UUID  
        IP: dv.ip,  // 玩家IP  
        AvgPing: dv.avgPing,  // 玩家平均延迟  
        AvgPacketLoss: dv.avgPacketLoss,  // 玩家平均丢包率  
        ConnectServerAddress: dv.serverAddress,  // 玩家连接的地址  
        OS: dv.os,  // 玩家操作系统  
        DeviceName: dv.deviceName,  //设备名  
        InPutMode: dv.inputMode,  // 玩家操作模式  
        ClientId: dv.clientId  // 玩家客户端ID  
    };
    return PlayerConnectInfo;  
}  
  
log("插件名称：" + PluginName);
log("插件版本：" + Version);  
log("作者：" + Author);  
  
// 玩家进入后写入信息  
mc.listen("onJoin", function (player) {  
    let currentTime = system.getTimeStr().replace(/:/g, "-").replace(/ /g, "_"); // 获取当前时间字符串，并替换字符以避免错误  
    let fileName = dv.ip + "-" + currentTime + ".json"; // 生成文件名  
    let PlayerConnectInfoFilePath = "./plugins/PlayerConnectInfo/PlayerData/" + fileName; // 拼接完整的文件路径  
    let Data = JSON.stringify(GetPlayerConnectInfo(player), null, 4); // 获取玩家信息的JSON字符串，并格式化（缩进4个空格）  
    File.writeTo(PlayerConnectInfoFilePath, Data); // 写入文件  
});