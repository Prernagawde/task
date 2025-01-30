import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-secondpage',
  imports: [CommonModule, FormsModule],
  templateUrl: './secondpage.component.html',
  styleUrl: './secondpage.component.css',
})
export class SecondpageComponent {
  title: string = '';
  showcard1 = false;
  showcard2 = false;
  showcard3 = false;
  userInput: number = 0;
  result: number = 0;
  showModal = false;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.params.subscribe((params) => (this.title = params['name']));
  }
  showcards(selection: string) {
    if (selection === 'card1') {
      this.showcard1 = true;
    } else if (selection === 'card2') {
      this.showcard2 = true;
    } else if (selection === 'card3') {
      this.showcard3 = true;
    }
  }
  toggleCardVisibility(card: string, event: Event) {
    const input = event.target as HTMLInputElement;
    const isChecked = input.checked!;

    if (card === 'card1') {
      this.showcard1 = isChecked;
    } else if (card === 'card2') {
      this.showcard2 = isChecked;
    } else if (card === 'card3') {
      this.showcard3 = isChecked;
    }
  }

  onInputChange() {
    if (this.userInput > 20) {
      this.userInput = 20;
    }

    this.result = this.userInput * this.userInput;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form has been submitted!');
    }
  }
  openmodal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}
