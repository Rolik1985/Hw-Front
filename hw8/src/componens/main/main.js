import React from "react";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SendIcon from '@mui/icons-material/Send';
import SellIcon from '@mui/icons-material/Sell';
import ShareIcon from '@mui/icons-material/Share';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BackupIcon from '@mui/icons-material/Backup';
import './main.css'

function Main(){
    return(
        <>
        <div className = 'wraper'>
            <h1>We offer a complete<br/> range of features</h1>
            <div className ='main-content'>
                <div className ='main-elem'>
                    <ProductionQuantityLimitsIcon/>
                    <h4>Store Integration</h4>
                    <p>Eos tota dicunt democritum no. Has natum<br/> gubergren ne. Est viris soleat sadipscing cu. Legere<br/> epicuri insolens eu nec, dicit virtute urbanitas id<br/> nam, qui in habeo semper eligendi.</p>
                </div>
                <div className ='main-elem'>
                    <AdminPanelSettingsIcon/>
                    <h4>Data Protection</h4>
                    <p>Eos tota dicunt democritum no. Has natum<br/> gubergren ne. Est viris soleat sadipscing cu. Legere<br/> epicuri insolens eu nec, dicit virtute urbanitas id<br/> nam, qui in habeo semper eligendi.</p>
                </div>
                <div className ='main-elem'>
                    <SellIcon/>
                    <h4>Invoice Generator</h4>
                    <p>Eos tota dicunt democritum no. Has natum<br/> gubergren ne. Est viris soleat sadipscing cu. Legere<br/> epicuri insolens eu nec, dicit virtute urbanitas id<br/> nam, qui in habeo semper eligendi.</p>
                </div>
                <div className ='main-elem'>
                    <SendIcon/>
                    <h4>Auto Responder</h4>
                    <p>Eos tota dicunt democritum no. Has natum<br/> gubergren ne. Est viris soleat sadipscing cu. Legere<br/> epicuri insolens eu nec, dicit virtute urbanitas id<br/> nam, qui in habeo semper eligendi.</p>
                </div>
                <div className ='main-elem'>
                    <ShareIcon/>
                    <h4>Social Plugins</h4>
                    <p>Eos tota dicunt democritum no. Has natum<br/> gubergren ne. Est viris soleat sadipscing cu. Legere<br/> epicuri insolens eu nec, dicit virtute urbanitas id<br/> nam, qui in habeo semper eligendi.</p>
                </div>
                <div className ='main-elem'>
                    <BackupIcon/>
                    <h4>Data Backup</h4>
                    <p>Eos tota dicunt democritum no. Has natum<br/> gubergren ne. Est viris soleat sadipscing cu. Legere<br/> epicuri insolens eu nec, dicit virtute urbanitas id<br/> nam, qui in habeo semper eligendi.</p>
                </div>

            </div>
        </div>
        </>
    )
}
export default Main