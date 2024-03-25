import { Path, Svg } from "react-native-svg";

export const CalendarIcon = (focus?: boolean) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        d="M3.593 9.404h17.824M16.942 13.31h.01M12.505 13.31h.009M8.058 13.31h.01M16.942 17.196h.01M12.505 17.196h.009M8.058 17.196h.01M16.544 2v3.29M8.466 2v3.29"
        stroke={focus ? "#4169E1" : "#fff"}
        strokeOpacity={focus ? 1 : 0.4}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M16.738 3.58H8.271C5.334 3.58 3.5 5.214 3.5 8.221v9.05C3.5 20.326 5.334 22 8.271 22h8.458c2.946 0 4.771-1.645 4.771-4.653V8.222c.01-3.007-1.816-4.643-4.762-4.643z"
        stroke={focus ? "#4169E1" : "#fff"}
        strokeOpacity={focus ? 1 : 0.4}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ChatIcon = (focus?: boolean) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        clipRule="evenodd"
        d="M19.971 19.07c-3.056 3.056-7.581 3.717-11.285 2.004-.546-.22-.995-.398-1.42-.398-1.188.007-2.665 1.158-3.433.391-.767-.768.384-2.246.384-3.44 0-.427-.17-.867-.39-1.415C2.112 12.51 2.773 7.982 5.83 4.927c3.902-3.903 10.24-3.903 14.141 0 3.909 3.908 3.902 10.241 0 14.143z"
        stroke={focus ? "#4169E1" : "#fff"}
        strokeOpacity={focus ? 1 : 0.4}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.84 12.413h.008M12.83 12.413h.01M8.821 12.413h.01"
        stroke={focus ? "#4169E1" : "#fff"}
        strokeOpacity={focus ? 1 : 0.4}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const HomeIcon = () => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        d="M9.539 20.771v-3.066c0-.78.662-1.414 1.483-1.42h3.006c.825 0 1.493.636 1.493 1.42v3.076c0 .662.556 1.204 1.253 1.219h2.004c1.998 0 3.618-1.54 3.618-3.438V9.838a2.408 2.408 0 00-1.002-1.905l-6.855-5.248a3.422 3.422 0 00-4.108 0L3.606 7.943a2.39 2.39 0 00-1.002 1.904v8.715C2.604 20.46 4.224 22 6.222 22h2.004c.714 0 1.293-.55 1.293-1.229"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const RoomsIcon = (focus?: boolean) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.987 14.034h.113l.252.001c1.93.014 6.343.22 6.343 3.389 0 3.147-4.258 3.353-6.313 3.366h-.76c-1.932-.013-6.344-.22-6.344-3.384 0-3.152 4.412-3.357 6.343-3.37l.253-.002h.113zm0 1.59c-2.376 0-5.21.309-5.21 1.782 0 1.44 2.664 1.776 4.992 1.795h.218c2.376 0 5.208-.308 5.208-1.777 0-1.488-2.832-1.8-5.208-1.8zm7.953-2.02c2.423.385 2.932 1.59 2.932 2.535 0 .576-.214 1.628-1.644 2.206a.72.72 0 01-.267.052.753.753 0 01-.7-.512c-.149-.41.046-.87.433-1.026.678-.273.678-.575.678-.72 0-.464-.557-.789-1.655-.962-.409-.066-.692-.47-.63-.905a.762.762 0 01.853-.668zm-15.054.668c.061.435-.222.839-.631.905-1.098.173-1.655.498-1.655.962 0 .145 0 .446.679.72.387.156.582.616.434 1.026a.753.753 0 01-.701.512.72.72 0 01-.267-.052c-1.431-.579-1.645-1.63-1.645-2.206 0-.943.509-2.15 2.933-2.535a.762.762 0 01.853.668zM11.986 3c2.52 0 4.57 2.172 4.57 4.841 0 2.67-2.05 4.841-4.57 4.841h-.026c-1.22-.004-2.363-.51-3.22-1.426A4.938 4.938 0 017.42 7.838C7.419 5.172 9.468 3 11.987 3zm0 1.59c-1.691 0-3.067 1.458-3.067 3.251a3.314 3.314 0 00.886 2.295 2.954 2.954 0 002.157.957l.025.795v-.795c1.692 0 3.069-1.458 3.069-3.252 0-1.793-1.377-3.252-3.07-3.252zm6.19-.552c1.758.306 3.035 1.9 3.035 3.789-.004 1.902-1.345 3.533-3.12 3.797a.696.696 0 01-.104.008c-.368 0-.69-.287-.742-.685-.057-.435.228-.837.639-.897 1.04-.155 1.825-1.11 1.827-2.225 0-1.105-.748-2.04-1.78-2.219-.407-.071-.684-.48-.617-.913.068-.434.45-.724.862-.655zM6.66 4.693c.067.433-.21.842-.618.913-1.031.18-1.78 1.114-1.78 2.22.003 1.113.788 2.07 1.827 2.224.41.06.696.462.639.897-.053.398-.374.685-.742.685a.696.696 0 01-.104-.008C4.107 11.36 2.767 9.73 2.762 7.83c0-1.891 1.278-3.485 3.036-3.791.42-.07.794.223.862.655z"
        fill={focus ? "#4169E1" : "#fff"}
        fillOpacity={focus ? 1 : 0.4}
      />
    </Svg>
  );
};

export const ProfileIcon = (focus?: boolean) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        d="M12.279 12.056a4.778 4.778 0 100-9.556 4.778 4.778 0 000 9.556z"
        stroke={focus ? "#4169E1" : "#fff"}
        strokeWidth={1.5}
        strokeOpacity={focus ? 1 : 0.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M4.7 18.702a2.215 2.215 0 01.22-.97c.457-.916 1.748-1.401 2.819-1.62a16.778 16.778 0 012.343-.33 25.039 25.039 0 014.385 0c.787.055 1.57.165 2.343.33 1.07.219 2.361.658 2.82 1.62a2.27 2.27 0 010 1.949c-.459.961-1.75 1.4-2.82 1.611-.772.172-1.555.285-2.343.339-1.188.1-2.38.119-3.57.055-.275 0-.54 0-.815-.055a15.417 15.417 0 01-2.334-.339c-1.08-.21-2.361-.65-2.828-1.611a2.28 2.28 0 01-.22-.98z"
        stroke={focus ? "#4169E1" : "#fff"}
        strokeWidth={1.5}
        strokeOpacity={focus ? 1 : 0.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
