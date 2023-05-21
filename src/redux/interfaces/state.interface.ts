import {IProfilePageState} from "./profilePageState.interface";
import {IDialogsPageState} from "./dialogsPageState.interface";
import {IUsersPageState} from "./usersPageState.interface";

export interface IState {
        profilePageState: IProfilePageState,
        dialogsPageState: IDialogsPageState,
        usersPageState: IUsersPageState
}