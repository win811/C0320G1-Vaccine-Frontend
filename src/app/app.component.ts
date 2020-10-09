import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import * as RecordRTC from 'recordrtc';
import {Router} from '@angular/router';
import {BrandService} from './shared/services/brand.service';
import {NotifiByDucService} from './shared/services/notifi-by-duc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'C0320G1-Vaccine-Frontend';
  private record;
  private actionNext = '';
  private recording = false;
  private url;
  private error;
  // tslint:disable-next-line:variable-name
  private bot_ear: string;
  // tslint:disable-next-line:variable-name
  private bot_voice: string;

  // tslint:disable-next-line:max-line-length
  constructor(private domSanitizer: DomSanitizer, private brandService: BrandService, private router: Router, private noti: NotifiByDucService) {
  }

  sanitize(url: string) {
    console.log(url);
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  /**
   * Start recording.
   */
  initiateRecording() {
    this.url = '';
    this.recording = true;
    const mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  /**
   * Will be called automatically.
   */
  successCallback(stream) {
    // tslint:disable-next-line:prefer-const
    let options = {
      mimeType: 'audio/wav',
      numberOfAudioChannels: 1
    };
    // Start Actuall Recording
    // tslint:disable-next-line:prefer-const
    let StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }

  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
  }

  testText(voice) {
    this.brandService.TextToSpeech(voice).subscribe(data => {
      setTimeout(() => {
        this.url = data.async;
      }, 1500);

      console.log('success');
      if (this.actionNext != '') {
        this.router.navigate([this.actionNext]);
      }
      console.log(data);
      console.log('URL' + this.url);
    });
  }

  processRecording(blob) {
    this.brandService.SpeechToText(blob).subscribe(data => {
      console.log(data);
      this.bot_ear = data.hypotheses[0].utterance;
      console.log('text trả về :' + this.bot_ear);
      this.bot_voice = this.botBrain(this.bot_ear);
      this.noti.showNotification('info', 'MR LEON ', this.bot_voice);
      this.testText(this.bot_voice);
    });
    // this.url = URL.createObjectURL(blob);
  }

  // tslint:disable-next-line:variable-name
  botBrain(bot_ear) {
    this.actionNext = '';
    bot_ear = bot_ear.toLowerCase();
    // tslint:disable-next-line:triple-equals
    if (bot_ear.search('chào') != -1) {
      return 'Chào bạn, mình là A I , mình có thể giúp gì cho bạn ?';
      // tslint:disable-next-line:triple-equals
    } else if (bot_ear.search('vắc xin') != -1) {
      this.actionNext = 'guest/vacxin';
      return 'Bên mình có đủ các loại vắc xin tốt nhất trên thị trường, cả nội địa và ngoại địa, mình mở danh sách cho bạn xem nhé ?';
      // tslint:disable-next-line:triple-equals
    } else if (bot_ear.search('cảm ơn') != -1 || bot_ear.search('Cảm ơn') != -1) {
      return 'Vâng ạ, Chúc bạn một ngày làm việc vui vẻ, cảm ơn bạn đã quan tâm đến Trung tâm tiêm chủng GPS ?';
      // tslint:disable-next-line:triple-equals
    } else if (bot_ear.search('lịch tiêm') != -1) {
      return 'Mình sẽ mở trang lịch tiêm cho bạn nhé !';
      // tslint:disable-next-line:triple-equals
    } else if (bot_ear.search('hỏi') != -1 || bot_ear.search('vấn đề') != -1 || bot_ear.search('hỗ trợ') != -1) {
      return 'Vâng ạ, mình sẽ trả lời các câu hỏi của bạn !';
      // tslint:disable-next-line:triple-equals
    } else if (bot_ear.search('Tư vấn') != -1 || bot_ear.search('tư vấn') != -1) {
      this.actionNext = 'guest/vacxin';
      return 'mời bạn xem các thông tin về các gói tiêm chủng mới nhất bên mình ';
    } else if (bot_ear.search('phản hồi') != -1) {
      this.actionNext = 'guest/contact';
      return 'Xin vui lòng nhập thông tin phản hồi theo mẫu dưới đây ';
    } else {
      return 'Xin lỗi, mình không hiểu câu hỏi của bạn ';
    }
  }

  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }
}
