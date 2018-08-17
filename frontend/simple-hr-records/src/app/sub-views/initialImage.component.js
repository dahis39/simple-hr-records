System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var colors, InitialImageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            colors = [
                "#ea0b29", "#DEB887", "#5F9EA0", "#6495ED", "#006400", "#FF8C00", "#483D8B", "#FFA500", "#F08080", "#A0522D", "#9ACD32", "#FFA07A", "#20B2AA"
            ];
            InitialImageComponent = (function () {
                function InitialImageComponent() {
                }
                InitialImageComponent.prototype.ngOnInit = function () {
                    this.initial = this.name.charAt(0);
                    this.color = this.getColor(this.initial);
                };
                InitialImageComponent.prototype.ngOnChanges = function () {
                    this.ngOnInit();
                };
                InitialImageComponent.prototype.getColor = function (initial) {
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
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InitialImageComponent.prototype, "name", void 0);
                InitialImageComponent = __decorate([
                    core_1.Component({
                        selector: 'initial-image',
                        template: "\n    <div class=\"outer\">\n        <span class=\"employee-image\" [style.background-color]=\"color\">{{initial}}</span>\n    </div>\n  ",
                        styles: ["\n    .outer {\n        display: inline-block;\n        text-align: center;\n    }\n    .employee-image {\n        display: inline-block;\n        height: 50px;\n        width: 50px;\n        border-radius: 50%;\n        margin: 15px 13px;\n        background-color\n\n        font-family: 'Roboto';\n        font-size: 1.2em;\n        line-height: 2.2em;\n        color: white;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InitialImageComponent);
                return InitialImageComponent;
            }());
            exports_1("InitialImageComponent", InitialImageComponent);
        }
    }
});
//# sourceMappingURL=initialImage.component.js.map