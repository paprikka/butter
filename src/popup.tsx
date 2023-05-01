import {render} from 'preact';


const App = () => {
    return <div>
        
        <button onClick={
            () => chrome.runtime.reload()
        }>Reload</button>
    </div>;
    };


render(<App />, document.getElementById('root')!);

