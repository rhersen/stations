function south_north(station, south, north) {
  if (station.north > south) {
    return +(station.north < north);
  } else {
    return false;
  }
}

function east(station, south, north, east$1) {
  if (station.north > south && station.north < north) {
    return +(station.east > east$1);
  } else {
    return false;
  }
}

function west(station, south, north, west$1) {
  if (station.north > south && station.north < north) {
    return +(station.east < west$1);
  } else {
    return false;
  }
}

function east_west(station, south, north, east, west) {
  if (station.north > south && station.north < north && station.east > east) {
    return +(station.east < west);
  } else {
    return false;
  }
}

export function nw(station) {
  return west(station, 59.35, 59.58, 17.898);
}

export function ne(station) {
  return east(station, 59.37, 59.58, 17.898);
}

export function ncw(station) {
  return west(station, 59.35, 59.37, 18);
}

export function nce(station) {
  return east(station, 59.35, 59.37, 18);
}

export function nc(station) {
  return south_north(station, 59.34, 59.35);
}

export function c(station) {
  return south_north(station, 59.28, 59.34);
}

export function sc(station) {
  return south_north(station, 59.26, 59.28);
}

export function scw(station) {
  return west(station, 59.236, 59.26, 18);
}

export function sce(station) {
  return east(station, 59.236, 59.26, 18);
}

export function sw(station) {
  return east_west(station, 59.08, 59.236, 17.63, 17.98);
}

export function se(station) {
  return east(station, 59.08, 59.236, 17.98);
}
