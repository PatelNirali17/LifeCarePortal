import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PostOpNotesService } from '../../post-op-notes.service';
import { MatDialog } from '@angular/material/dialog';
import { PostOpNotesDialogComponent } from '../../component/post-op-notes-dialog/post-op-notes-dialog.component';

@Component({
  selector: 'app-post-op-notes',
  imports: [SharedModule, CommonModule],
  templateUrl: './post-op-notes.component.html',
  styleUrl: './post-op-notes.component.scss'
})
export class PostOpNotesComponent {
  PostOpNotesList: any[] = [];
  paginatedList: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private postOpNotesService: PostOpNotesService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.GetAllPostOpNotes()
    }, 1000);
  }

  GetAllPostOpNotes() {
    this.postOpNotesService.GetAllPostOpNotes().subscribe({
      next: (result: any) => {
        this.PostOpNotesList = result;
        this.updatePaginatedList();
        this.cdr.markForCheck();
      },
    })
  }

  trackByFn(index: number, item: any): any {
    return item.ID || index;
  }

  getBadgeClass(type: string): string {
    return type ? type.toLowerCase().replace(/\s+/g, '-') : '';
  }

  get totalPages(): number {
    return Math.ceil(this.PostOpNotesList.length / this.pageSize);
  }

  get currentPage(): number {
    return this.pageIndex + 1;
  }

  get pagesArray(): any[] {
    return Array(this.totalPages).fill(0);
  }

  updatePaginatedList(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedList = this.PostOpNotesList.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageIndex = page - 1;
      this.updatePaginatedList();
    }
  }

  OpenAddPostOpNotesDialog(obj: any) {
    const dialogRef = this.dialog.open(PostOpNotesDialogComponent, {
      minWidth: '600px',
      maxWidth: '600px',
      data: obj ? obj : null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllPostOpNotes()
    });
  }
}
