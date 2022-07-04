import styled from 'styled-components'

export const Rate = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    width: 220px;
`

export const Label = styled.label`
    margin-bottom: 0.5rem;
`

export const LevelContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
interface PillProps {
    levelColor: string
    active: boolean
}
export const Pill = styled.div<PillProps>`
    display: flex;

    height: 6px;
    width: 30%;

    background-color: ${({ active, levelColor }) => active ? levelColor : 'gray'};
`