import { Directive, ElementRef, HostListener, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[careerElevation]'
})
export class ElevationDirective implements OnChanges {

    @Input() public defaultElevation: number = 2;

    @Input() public raisedElevation: number = 8;

    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ) {
        this.setElevation(this.defaultElevation);
    }

    public ngOnChanges(_changes: SimpleChanges): void {
        this.setElevation(this.defaultElevation);
    }

    @HostListener('mouseenter')
    public onMouseEnter(): void {
        this.setElevation(this.raisedElevation);
    }

    @HostListener('mouseleave')
    public onMouseLeave(): void {
        this.setElevation(this.defaultElevation);
    }

    private setElevation(amount: number): void {
        const elevationPrefix = 'mat-elevation-z';
        const classesToRemove = Array.from((<HTMLElement>this.element.nativeElement).classList)
        .filter(c => c.startsWith(elevationPrefix));
        classesToRemove.forEach((c) => {
        this.renderer.removeClass(this.element.nativeElement, c);
        });

        const newClass = `${elevationPrefix}${amount}`;
        this.renderer.addClass(this.element.nativeElement, newClass);
    }
}
