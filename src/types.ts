import {LSPayment, LSSchedule} from "loan-schedule.js/dist/types"

export type EarlyRepaymentType = {
    [earlyRepaymentDate: string]: {
        erType?: string
        erAmount?: string,
    }
}

export type RequestType = {
    amount?: string
    paymentAmount?: string
    term?: number
    issueDate?: string
    rate?: string
    paymentOnDay?: number
    scheduleType?: string
    earlyRepaymentDate?: string
    earlyRepaymentAmount?: string
    earlyRepayment?: EarlyRepaymentType
}

export type ScheduleType = {
    lastPaymentDate?: string
    termInYear?: number
} & LSSchedule

export type PaymentType = {
    isEarly?: boolean
    remainingTerm?: number
} & LSPayment

export type StateType = {
    request?: RequestType
    schedule?: ScheduleType
}

export type ActionType = {
    type: string
    name?: string
    value?: string
    date?: string
    amount?: string
}