import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  public API = 'https://api.fpt.ai/hmi/asr/general';
  public API2 = 'https://api.fpt.ai/hmi/tts/v5';

  constructor(private http: HttpClient) {
  }

  SpeechToText(blob): Observable<any> {
    // const formData: FormData = new FormData();
    // formData.append('file', audioFile, audioFile.name);
    const headers = new HttpHeaders()
      .set('username', '')
      .set('api_key', 'tW9XnYGZcPn6FuZ9jtpm5TtiAJnKcPMU')
      .set('Content-Type', '');

    return this.http.post(this.API, blob, {headers});
  }

  TextToSpeech(text): Observable<any> {
    const headers = new HttpHeaders()
      .set('voice', 'banmai')
      .set('api_key', 'tW9XnYGZcPn6FuZ9jtpm5TtiAJnKcPMU')
      .set('X-TTS-NoCache', 'true');

    return this.http.post(this.API2, text, {headers});
  }
}
