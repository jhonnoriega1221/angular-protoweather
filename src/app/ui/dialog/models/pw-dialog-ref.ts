import { ComponentRef } from "@angular/core";
import { Observable } from "rxjs";
import { DialogContainerComponent } from '../components/dialog-container/dialog-container.component';

export interface PwDialogRef<T> {
	dialogInstance: {
		dialogContainerRef:ComponentRef<DialogContainerComponent>,
		dialogContentRef:ComponentRef<any>,
	},

	close(dialogResult?: any): void;
	afterClosed(): void;

}
