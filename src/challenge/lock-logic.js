const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  lockState.wheels[index] += incrementBy;

  for (let i = 0; i < SECRET_COMBO.length; i++) {
    if (lockState.wheels[i] !== SECRET_COMBO[i]) {
      break
    }
    if (i == SECRET_COMBO.length - 1 && lockState.wheels[i] === SECRET_COMBO[i]) {
      lockState.locked = false;
      redirect('tiffany');
    }
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
