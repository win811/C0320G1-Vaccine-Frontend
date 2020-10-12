import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [

  { path: '/admin/employee-list', title: 'Quản lý nhân viên', icon: 'person', class: '' },
  { path: 'vaccine-storage', title: 'Kho vắc xin', icon: 'content_paste', class: '' },
  { path: 'dailySchedule' , title: 'Lịch tiêm địch kỳ', icon: 'list', class: ''},
  { path: 'injected-list', title: 'DS tiêm định kỳ', icon: 'library_books', class: '' },
  { path: 'listPatientInjectRequest', title: 'DS tiêm yêu cầu', icon: 'import_contacts', class: '' },
  { path: 'contactBox', title: 'Hộp thư phản hồi', icon: 'contact_mail', class: '' },
  { path: 'finance/patient', title: 'Giao dịch với KH', icon: 'local_atm', class: '' },
  { path: 'vaccine-list', title: 'Quản lý giá vacxin', icon: "monetization_on", class: '' },
  { path: 'patient-list', title: 'Quản lý khách hàng', icon: 'supervisor_account', class: '' },
  { path: 'supplier-transaction', title: 'Nhà cung cấp', icon: 'local_shipping', class: '' },

  // { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };



}
