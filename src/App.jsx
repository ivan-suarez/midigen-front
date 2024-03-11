import './App.css'
import axios from 'axios'
import MidiPlayer from 'react-midi-player'
import React, { useState } from 'react'


function App() {

  const [midiBlob, setMidiBlob] = useState(null);
  
const handleDownload = async()=>{
  try{
    console.log('calling backend')
    const response = await axios.get('http://127.0.0.1:5000', {responseType: 'blob'});
    setMidiBlob(response.data);
    /* const blob = new Blob([response.data], { type: 'audio/midi' });
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'downloaded_file.midi');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('call ended')*/
  }catch(error){

  }
};



  return (
    <>
      <div>

        <button onClick={handleDownload} id="downloadMidi">Download MIDI</button>
        {midiBlob && <MidiPlayer src={URL.createObjectURL(midiBlob)}/>}
      </div>
    </>
  )
}

export default App
