import { GoogleSpreadsheet } from 'google-spreadsheet'

export const find_wagpay_id = async (wagpay_id) => {
  return new Promise(async (resolve, reject) => {
    const doc = new GoogleSpreadsheet(
      '1UWF4OSWsDLKAcJsG0I_gV0NWT9H_b6Kkr9ZrpVMxCRc'
    )

    await doc.useServiceAccountAuth({
      client_email: 'wagpay@intrepid-pagoda-267618.iam.gserviceaccount.com',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/KepEfvLECIri\n8luOSSGFcIuvBBUvGWmCl9bGAkecE8e9eJiazETPNtpxlEVyxStgkP0Z39K2rzU1\neZb5fauXMvBTQ46pALPz0Mi2RjAk8Wjtvjvu6KSHIJM00/ybMc0fKXQ/P/HyqAxo\nDtSqslT2hANtxBEz5jiAhn3ymS1eCi2LOk7zCYlKnRIiy4PZP6OEpKszmdckgogu\nWckHXTYUCSNpRBQrL5/xli2iMvnbGroqHEpx7E6QJO3Y7yx88lnCp8ACp6yiW/pW\nUVAMo6whuT0WDLWgWqXQBJ0Su7xBiWoxcuV3DD1O5wM2bjJmLKLnHUW1S7HS7xgc\nO8MuFja5AgMBAAECggEADMcD8h0cI+9APUgex4Vq2Kz7oTCgK9xCeailgemwGKYX\n0TnI1Xv203Tip/nVpIS6UAOQ71RPFMfkQhVE+pskR4BvoNkgpXo3DQJ1D/3kBOwf\n69gt0Fu7d469WCgdN9Bd2gney8V96g7CeYgYPeqalDmhswoKblIij7CtpXQInMLq\nuOKEG8GGAR+es3GhHU9OqtZMPnbzUKrHnhZdCmWGnkApnpacw+Ieww1e8/Tt0wZ3\nSpy7CZNxvBSCQTjQmejFH4O/lD+I0RQfJCzNPp7JgqFpJgtTv8M0Ii4QHXtkG5dR\nnTKqZX8JgZyie0zzE2LwCAerptklyye3VqVGhhOQawKBgQDwQS4OQhcANgjn8dyZ\nQPZnNek73LKqcTkXmBN8Y40je3XB4OXARzpmhgCQpf8pde4VEZcdi1hK/iRw8c78\nkGooRpSN4fwfpCGeprJ+m9rLNUcO26hHbWgl10V8U0IXbO+ejEYbV7s5fn7ZmedR\nj80DxLF1fFU1qSuuFMqg+SdOvwKBgQDLsR+gUE7MXcw/wIhC/XsdvAw5gAi0Ctra\nZuFV27ycaZojdDFdtXIalShFKJ/TUeazs4/6a0xgZvIt9wv6HbessMRTDykT7SM7\nYVAh3BSFyjvI+2T/a1DyQm3RyrIItPWYEfm07ZZTV+TIOT1s5oCdw1N9ymePSOlm\nrULWrkBQhwKBgQCKSGnSyRVmCLPdlKctCmgIhc4lp2Sql5qNyvlEOiRtTM09d02l\n+xlRE0XV+8U+vuL2+3XoCmEaYObmnzdMxW5kmiM8+tpb9+Nl5nqMRvaKybKJicJ0\nwjMUvLAA3AcJZqkQr5pWeIuJjxZB9sRefI864QZnIdYFmcZLXyo1ttJ6DwKBgGcw\nrzX3GURdTGkLr7xIUAPLTWIf48jaKu8z6XomnNGcihLl/VBc6JZg9Aq9PuK+fiKR\nmCIkE4hO/uecXTvzrCZXUs5FQukuXIfrj73nkZoJzunNuefPxS1Fy/7ZMgJJMpY8\nnQU0y9AjGer5XI375DKITpbOYFJtfJigs9iwZDKnAoGBANELtI/NMlUNV99o6g/w\n67ru/TBI4jTa1IAOCOJUf3ZiHdk1JHfzILKjMsKZRSN/sRNG28iaQT/ZcUbb7RrF\n1WheuY9iO5KtkoKF7KzWLHJoHrJAUOK95d/6u4BsAgNpBT8FFAPxVm9QZsqfjNlj\n3rjqqtdBLE7Bg85n32Czlbx1\n-----END PRIVATE KEY-----\n',
    })

    await doc.loadInfo()
    await doc.updateProperties({ title: 'WagPay Waitlist Form' })

    // const sheet = await doc.addSheet({ headerValues: ['address'] });
    const sheet = await doc.sheetsByIndex[0]

    if (!sheet) reject("can't find database")

    const data = await sheet.getRows()

    const wagpay_ids = data.map((i) => i.wagpay_id)

    console.log(wagpay_ids)

    for (let i = 0; i < wagpay_ids.length; i++) {
      if (wagpay_id === wagpay_ids[i]) {
        resolve(true)
        return
      }
    }
    resolve(false)
  })
}

export const db = async (email, address, twitter, wagpay_id) => {
  return new Promise(async (resolve, reject) => {
    const doc = new GoogleSpreadsheet(
      '1UWF4OSWsDLKAcJsG0I_gV0NWT9H_b6Kkr9ZrpVMxCRc'
    )

    await doc.useServiceAccountAuth({
      client_email: 'wagpay@intrepid-pagoda-267618.iam.gserviceaccount.com',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/KepEfvLECIri\n8luOSSGFcIuvBBUvGWmCl9bGAkecE8e9eJiazETPNtpxlEVyxStgkP0Z39K2rzU1\neZb5fauXMvBTQ46pALPz0Mi2RjAk8Wjtvjvu6KSHIJM00/ybMc0fKXQ/P/HyqAxo\nDtSqslT2hANtxBEz5jiAhn3ymS1eCi2LOk7zCYlKnRIiy4PZP6OEpKszmdckgogu\nWckHXTYUCSNpRBQrL5/xli2iMvnbGroqHEpx7E6QJO3Y7yx88lnCp8ACp6yiW/pW\nUVAMo6whuT0WDLWgWqXQBJ0Su7xBiWoxcuV3DD1O5wM2bjJmLKLnHUW1S7HS7xgc\nO8MuFja5AgMBAAECggEADMcD8h0cI+9APUgex4Vq2Kz7oTCgK9xCeailgemwGKYX\n0TnI1Xv203Tip/nVpIS6UAOQ71RPFMfkQhVE+pskR4BvoNkgpXo3DQJ1D/3kBOwf\n69gt0Fu7d469WCgdN9Bd2gney8V96g7CeYgYPeqalDmhswoKblIij7CtpXQInMLq\nuOKEG8GGAR+es3GhHU9OqtZMPnbzUKrHnhZdCmWGnkApnpacw+Ieww1e8/Tt0wZ3\nSpy7CZNxvBSCQTjQmejFH4O/lD+I0RQfJCzNPp7JgqFpJgtTv8M0Ii4QHXtkG5dR\nnTKqZX8JgZyie0zzE2LwCAerptklyye3VqVGhhOQawKBgQDwQS4OQhcANgjn8dyZ\nQPZnNek73LKqcTkXmBN8Y40je3XB4OXARzpmhgCQpf8pde4VEZcdi1hK/iRw8c78\nkGooRpSN4fwfpCGeprJ+m9rLNUcO26hHbWgl10V8U0IXbO+ejEYbV7s5fn7ZmedR\nj80DxLF1fFU1qSuuFMqg+SdOvwKBgQDLsR+gUE7MXcw/wIhC/XsdvAw5gAi0Ctra\nZuFV27ycaZojdDFdtXIalShFKJ/TUeazs4/6a0xgZvIt9wv6HbessMRTDykT7SM7\nYVAh3BSFyjvI+2T/a1DyQm3RyrIItPWYEfm07ZZTV+TIOT1s5oCdw1N9ymePSOlm\nrULWrkBQhwKBgQCKSGnSyRVmCLPdlKctCmgIhc4lp2Sql5qNyvlEOiRtTM09d02l\n+xlRE0XV+8U+vuL2+3XoCmEaYObmnzdMxW5kmiM8+tpb9+Nl5nqMRvaKybKJicJ0\nwjMUvLAA3AcJZqkQr5pWeIuJjxZB9sRefI864QZnIdYFmcZLXyo1ttJ6DwKBgGcw\nrzX3GURdTGkLr7xIUAPLTWIf48jaKu8z6XomnNGcihLl/VBc6JZg9Aq9PuK+fiKR\nmCIkE4hO/uecXTvzrCZXUs5FQukuXIfrj73nkZoJzunNuefPxS1Fy/7ZMgJJMpY8\nnQU0y9AjGer5XI375DKITpbOYFJtfJigs9iwZDKnAoGBANELtI/NMlUNV99o6g/w\n67ru/TBI4jTa1IAOCOJUf3ZiHdk1JHfzILKjMsKZRSN/sRNG28iaQT/ZcUbb7RrF\n1WheuY9iO5KtkoKF7KzWLHJoHrJAUOK95d/6u4BsAgNpBT8FFAPxVm9QZsqfjNlj\n3rjqqtdBLE7Bg85n32Czlbx1\n-----END PRIVATE KEY-----\n',
    })

    await doc.loadInfo()
    await doc.updateProperties({ title: 'WagPay Waitlist Form' })

    // const sheet = await doc.addSheet({ headerValues: ['address'] });
    const sheet = await doc.sheetsByIndex[0]

    if (!sheet) reject("can't find database")

    const data = await sheet.getRows()

    const find = false

    for (let i = 0; i < data.length; i++) {
      const d = data[i]

      if (
        d.address === address ||
        d.twitter === twitter ||
        d.wagpay_id === wagpay_id
      ) {
        find = true
        break
      }
    }

    if (find) {
      reject('data already exists')
      return
    }

    const moreRows = await sheet.addRows([
      {
        email: email,
        address: address,
        twitter: twitter,
        wagpay_id: wagpay_id,
      },
    ])

    resolve(true)
  })
}
