const axios = require('axios');

const run = async () => {
    const url = process.argv.find(a => a.includes('http://'));
    while (true) {
        try {
            const xml = '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://services.senior.com.br"><soapenv:Body><ser:Cliente><user>processoautomatico289</user><password>processoautomatico289</password><encryption>0</encryption><parameters><EVlrApr>1</EVlrApr><ECodRep>1</ECodRep><ECplCob>1</ECplCob><ECplEnd>1</ECplEnd><EDisRev>1</EDisRev><EApeCli>1</EApeCli><EBaiCob>1</EBaiCob><EBaiEnd>1</EBaiEnd><ECGCCPF>1</ECGCCPF><ECarCto>1</ECarCto><ECep>1</ECep><ECepCob>1</ECepCob><ECidCob>1</ECidCob><ECidEnd>1</ECidEnd><ECodCpg>1</ECodCpg><EEndCob>1</EEndCob><EEstCob>1</EEstCob><EEstEnd>1</EEstEnd><EInsEst>1</EInsEst><EIntNet>1</EIntNet><ELogradouro>1</ELogradouro><EMailCto>1</EMailCto><EMailEle>1</EMailEle><ENexEnv>1</ENexEnv><ENomCli>1</ENomCli><ENomCto>1</ENomCto><ENumCob>1</ENumCob><ENumEnd>1</ENumEnd><ENumTel1>1</ENumTel1><ENumTel2>1</ENumTel2><ENumTel3>1</ENumTel3><ERamAti>1</ERamAti><EScore>1</EScore><ESetCto>1</ESetCto><ETelCto>1</ETelCto><ETelCto1>1</ETelCto1><ETemCodGre>1</ETemCodGre><ETipCli>1</ETipCli><ETipPag>1</ETipPag><EUnidade>1</EUnidade><ECodGre>1</ECodGre></parameters></ser:Cliente></soapenv:Body></soapenv:Envelope>';
            const response = await axios.post(url, xml, {
                headers:
                    { 'Content-Type': 'text/xml;charset=UTF-8' }
            });
            console.log(response);
            const randon = getRandomArbitrary(1000, 20000);
            const p = new Promise(resolve => {
                setTimeout(() => {
                    resolve({});
                }, randon);
            });
            console.log('Esperando nova integração...', randon);
            await p;
        } catch (err) {
            console.log(err);
        }
    }
}

const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

run();