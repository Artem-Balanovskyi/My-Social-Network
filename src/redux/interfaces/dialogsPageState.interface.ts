export interface IDialogsPageState {
    dialogs: IDialog[],
    messages: IMessage[],
}

export interface IDialog {
    id: number,
    name: string
}

export interface IMessage {
    id: number,
    message: string
}