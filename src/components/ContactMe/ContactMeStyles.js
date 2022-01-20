import styled from "styled-components";

export const contactMe = styled.div`
display: ${({ openContact }) => openContact ? 'flex' : 'none'};

`