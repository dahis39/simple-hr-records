import { Component, Input, OnInit, OnChanges } from '@angular/core';

const colors : string[] = [
    "#ea0b29","#DEB887","#5F9EA0","#6495ED","#006400","#FF8C00","#483D8B","#FFA500","#F08080","#A0522D","#9ACD32","#FFA07A","#20B2AA"
]

@Component({
    selector: 'initial-image',
    template: `
    <div class="outer">
        <span class="employee-image" [style.background-color]="color">{{initial}}</span>
    </div>
  `,
    styles: [`
    .outer {
        display: inline-block;
        text-align: center;
    }
    .employee-image {
        display: inline-block;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin: 15px 13px;
        background-color

        font-family: 'Roboto';
        font-size: 1.2em;
        line-height: 2.2em;
        color: white;
    }
  `]
})
export class InitialImageComponent implements OnInit, OnChanges {
    @Input() name: string;

    initial: string;
    color: string;

    ngOnInit(): void {
        this.initial = this.name.charAt(0);
        this.color = this.getColor(this.initial);
    }

    ngOnChanges(): void {
        this.ngOnInit();
    }

    getColor(initial: string): string {
        if (/[ABab]/.test(initial)) {
            return colors[0];
        }
        else if (/[CDcd]/.test(initial)) {
            return colors[1];
        }
        else if (/[EFef]/.test(initial)) {
            return colors[2];
        }
        else if (/[GHgh]/.test(initial)) {
            return colors[3];
        }
        else if (/[IJij]/.test(initial)) {
            return colors[4];
        }
        else if (/[KLkl]/.test(initial)) {
            return colors[5];
        }
        else if (/[MNmn]/.test(initial)) {
            return colors[6];
        }
        else if (/[OoPp]/.test(initial)) {
            return colors[7];
        }
        else if (/[QqRr]/.test(initial)) {
            return colors[8];
        }
        else if (/[SsTt]/.test(initial)) {
            return colors[9];
        }
        else if (/[UuVv]/.test(initial)) {
            return colors[10];
        }
        else if (/[WwXx]/.test(initial)) {
            return colors[11];
        }
        else if (/[YyZz]/.test(initial)) {
            return colors[12];
        }
        return '#000000';
    }
}