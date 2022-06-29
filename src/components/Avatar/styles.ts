import styled from 'styled-components'

interface AvatarProps {
  large: boolean
}

export const Avatar = styled.div`
  display: flex;
  align-items: center;
`
export const Image = styled.img<AvatarProps>`
  margin-right: 0.75rem;

  width: ${({ large }) => large ? '72px' : '36px'};
  height: ${({ large }) => large ? '72px' : '36px'};

  border-radius: 10px;
`
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.h1<AvatarProps>`
  font-size: ${({ large }) => large ? '' : '14px'};
  font-weight: 500;
`
export const Subtitle = styled.small<AvatarProps>`
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: ${({ large }) => large ? '' : '10px'};
  color: ${({ theme }) => theme.color.brand.secondary};
`