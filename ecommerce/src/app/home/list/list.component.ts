import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatSort } from '@angular/material';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { HomeService } from '../home.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'image', 'price', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('value') searchText: ElementRef
  product: any = [];
  productList: any = [];
  dataSource : any;

  constructor(public dialog: MatDialog,
    public _homeService: HomeService) {
    this.product = this._homeService.productList
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.product);
  }


  openListDetail(item: any): void {
    const dialogRef = this.dialog.open(ListDetailComponent, {
      width: '250px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  sortList(order: any): void {
    this.productList = [...this.product]
    if (order == 'high') {
      this.dataSource = this.productList.sort((a, b) =>
        b.price - a.price
      );
    } else if (order = 'low') {
      this.dataSource = this.productList.sort((a, b) =>
        a.price - b.price
      );
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string): any {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }
}


