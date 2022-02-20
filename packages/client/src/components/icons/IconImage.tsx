import { Icon } from "@douyinfe/semi-ui";

export const IconImage: React.FC<{ style?: React.CSSProperties }> = ({
  style = {},
}) => {
  return (
    <Icon
      style={style}
      svg={
        <svg width="16" height="16" viewBox="0 0 256 256" role="presentation">
          <g fill="none" fillRule="evenodd">
            <path
              d="M197 27c17.673 0 32 14.327 32 32v138c0 17.673-14.327 32-32 32H59c-17.673 0-32-14.327-32-32V59c0-17.673 14.327-32 32-32h138Zm0 20H59c-6.525 0-11.834 5.209-11.996 11.695L47 59v138c0 6.525 5.209 11.834 11.695 11.996L59 209h138c6.525 0 11.834-5.209 11.996-11.695L209 197V59c0-6.525-5.209-11.834-11.695-11.996L197 47Z"
              fill="currentColor"
              fillRule="nonzero"
            ></path>
            <g fill="currentColor">
              <path
                d="M64.982 134.434c5.322-7.419 15.65-9.118 23.07-3.796a16.532 16.532 0 0 1 3.504 3.401l.292.395 23.387 32.6c3.22 4.488 2.191 10.736-2.296 13.955-4.408 3.162-10.513 2.226-13.78-2.06l-.175-.236-20.569-28.672-32.29 45.01c-3.161 4.407-9.244 5.477-13.712 2.464l-.242-.168c-4.407-3.162-5.478-9.245-2.465-13.713l.169-.242 35.107-48.938Z"
                fillRule="nonzero"
              ></path>
              <path
                d="M143.577 105.01c5.33-7.412 15.66-9.101 23.074-3.771a16.532 16.532 0 0 1 3.48 3.38l.291.391 56.34 78.353c3.224 4.484 2.203 10.733-2.281 13.957-4.404 3.167-10.51 2.238-13.782-2.044l-.175-.237L157 120.602l-41.771 58.1c-3.167 4.403-9.25 5.467-13.715 2.45l-.242-.17c-4.404-3.166-5.468-9.25-2.45-13.714l.168-.242 44.587-62.015Z"
                fillRule="nonzero"
              ></path>
              <path d="M99.825 104c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Z"></path>
            </g>
          </g>
        </svg>
      }
    />
  );
};
