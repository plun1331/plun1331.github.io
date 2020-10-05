function submitReport() {
    var error = document.getElementById("errorInfo").value;
    if (error == "") {
        alert("You must provide the error information.");
        return;
    }
    document.getElementById("errorInfo").value = "";
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/755136746974609515/T4qd8Qh8U92o21cJeaPfLeACOjYtPm8Se0VYqURTczkLKVvZTZ2v5s_mjZlnP7T7fyp9", true);
    request.setRequestHeader('Content-Type', 'application/json');
    var params = {
        embeds: [
            {
                "title": "Error Report",
                "url": "http://hexitmc.com",
                "fields": [
                    {
                        name: 'Additional Info:',
                        value: error,
                    },
                    {
                        name: `External User's IP:`,
                        value: '127.0.0.1',
                    }],
                "color": 16711680,
                timestamp: new Date(),
                footer: {
                    text: 'HexitGames Website',
                    icon_url: 'https://cdn.discordapp.com/icons/723529295070363700/e0d385cf03ee9c9b2ba28d0a5d11d2f5.png?size=1024',
                },
            }
        ]
    }
    request.send(JSON.stringify(params));
}