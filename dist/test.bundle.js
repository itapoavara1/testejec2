/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/test.js":
/*!*****************************!*\
  !*** ./src/scripts/test.js ***!
  \*****************************/
/***/ (() => {

eval("window.onload = ()=>{\r\n\r\n    const requester = {\r\n        name: $('#rName'),\r\n        document: $('#rDoc'),\r\n        email: $('#rEmail'),\r\n        phone: $('#rPhone'),\r\n        street: $('#rStreet'),\r\n        number: $('#rNumber'),\r\n        district: $('#rDistrict'),\r\n        city: $('#rCity'),\r\n        state: $('#rState'),\r\n        postalCode: $('#rPostalCode'),\r\n        report: $('#reportCase'),\r\n        request: $('#request'),\r\n        anticipationCause: $('#anticipation'),\r\n        valueOne: $('#valueOne'),\r\n        valueTwo: $('#valueTwo'),\r\n        valueTree: $('#valueTree'),\r\n\r\n        invalidName: $('#rInvalidName'),\r\n        invalidDocument: $('#rInvalidDocument'),\r\n        invalidEmail: $('#rInvalidEmail'),\r\n        invalidPhone: $('#rInvalidPhone'),\r\n        invalidStreet: $('#rInvalidStreet'),\r\n        invalidNumber: $('#rInvalidNumber'),\r\n        invalidDistrict: $('#rInvalidDistrict'),\r\n        invalidCity: $('#rInvalidCity'),\r\n        invalidState: $('#rInvalidState'),\r\n        invalidPostalCode: $('#rInvalidPostalCode'),\r\n        invalidReport: $('#invalidReport'),\r\n        invalidRequest: $('#invalidRequest'),\r\n        invalidAnticipationCause: $('#invalidAnticipationCause'),\r\n        invalidValueOne: $('#invalidValueOne'),\r\n        invalidValueTwo: $('#invalidValueTwo'),\r\n        invalidValueTree: $('#invalidValueTree')\r\n    }\r\n    const required = {\r\n        name: $('#rdName'),\r\n        document: $('#rdDoc'),\r\n        email: $('#rdEmail'),\r\n        phone: $('#rdPhone'),\r\n        street: $('#rdStreet'),\r\n        number: $('#rdNumber'),\r\n        district: $('#rdDistrict'),\r\n        city: $('#rdCity'),\r\n        state: $('#rdState'),\r\n        postalCode: $('#rdPostalCode'),\r\n\r\n        invalidName: $('#rdInvalidName'),\r\n        invalidDocument: $('#rdInvalidDocument'),\r\n        invalidEmail: $('#rdInvalidEmail'),\r\n        invalidPhone: $('#rdInvalidPhone'),\r\n        invalidStreet: $('#rdInvalidStreet'),\r\n        invalidNumber: $('#rdInvalidNumber'),\r\n        invalidDistrict: $('#rdInvalidDistrict'),\r\n        invalidCity: $('#rdInvalidCity'),\r\n        invalidState: $('#rdInvalidState'),\r\n        invalidPostalCode: $('#rdInvalidPostalCode')\r\n    }\r\n\r\n    const targets = {\r\n        requesterName: $('#requesterNameTarget'),\r\n        requesterDocument: $('#requesterDocTarget'),\r\n        requesterEmail: $('#requesterEmailTarget'),\r\n        requesterPhone: $('#requesterPhoneTarget'),\r\n        requesterAddress: $('#requesterAddressTarget'),\r\n\r\n        requiredName: $('#requiredNameTarget'),\r\n        requiredDocument: $('#requiredDocTarget'),\r\n        requiredEmail: $('#requiredEmailTarget'),\r\n        requiredPhone: $('#requiredPhoneTarget'),\r\n        requiredAddress: $('#requiredAddressTarget'),\r\n\r\n        report: $('#reportTarget'),\r\n        requests: $('#requestsTarget'), // if use append <li>\r\n        requestText: $('#requestTextTarget'),\r\n        anticipationBol: $('#anticipationTarget'),\r\n        anticipationText: $('#anticipationTextTarget'),\r\n\r\n        firstValue: $('#firstValue'),\r\n        secondValue: $('#secondValue'),\r\n        thirdValue: $('#thirdValue'),\r\n\r\n        signerName: $('#signerNameTarget'),\r\n        signerDocument: $('#signerDocument'),\r\n        date: $('#dateTarget'),\r\n        headerDate: $('#headerDateTarget'),\r\n        headerTime: $('#headerTimeTarget'),\r\n\r\n        doc2Name: $('#doc2NameTarget'),\r\n        doc2Document: $('#doc2DocumentTarget'),\r\n        doc2Street: $('#doc2StreetTarget'),\r\n        doc2Number: $('#doc2NumberTarget'),\r\n        doc2District: $('#doc2DistrictTarget'),\r\n        doc2CityState: $('#doc2CityStateTarget'),\r\n        doc2PostalCode: $('#doc2PostalCodeTarget'),\r\n        doc2Phone: $('#doc2PhoneTarget'),\r\n        doc2Email: $('#doc2EmailTarget'),\r\n        doc2Date: $('#doc2DateTarget'),\r\n        doc2HeaderDate: $('#doc2HeaderDateTarget'),\r\n        doc2HeaderTime: $('#doc2HeaderTimeTarget'),\r\n        doc2Signer: $('#doc2SignerTarget'),\r\n    }\r\n\r\n    function validateValues(){\r\n        let isValid = true;\r\n        //name\r\n        if (requester.name.val()){\r\n            requester.invalidName.addClass('hidden');\r\n        } else {\r\n            requester.invalidName.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#r_infoScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        if (required.name.val()){\r\n            required.invalidName.addClass('hidden');\r\n        } else {\r\n            required.invalidName.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#rd_infoScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        // document\r\n        if (requester.document.val()){\r\n            requester.invalidDocument.addClass('hidden');\r\n        } else {\r\n            requester.invalidDocument.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#r_infoScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        if (required.document.val()){\r\n            required.invalidDocument.addClass('hidden');\r\n        } else {\r\n            required.invalidDocument.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#rd_infoScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        // email\r\n        if (requester.email.val()){\r\n            requester.invalidEmail.addClass('hidden');\r\n        } else {\r\n            requester.invalidEmail.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#r_infoScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        if (required.email.val()){\r\n            required.invalidEmail.addClass('hidden');\r\n        } else {\r\n            required.invalidEmail.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#rd_infoScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        // phone\r\n        if (requester.phone.val()){\r\n            requester.invalidPhone.addClass('hidden');\r\n        } else {\r\n            requester.invalidPhone.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#r_infoScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        if (required.phone.val()){\r\n            required.invalidPhone.addClass('hidden');\r\n        } else {\r\n            required.invalidPhone.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#rd_infoScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        // street\r\n        if (requester.street.val()){\r\n            requester.invalidStreet.addClass('hidden');\r\n        } else {\r\n            requester.invalidStreet.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#r_addressScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        if (required.street.val()){\r\n            required.invalidStreet.addClass('hidden');\r\n        } else {\r\n            required.invalidStreet.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#rd_addressScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        // number\r\n        if (requester.number.val()){\r\n            requester.invalidNumber.addClass('hidden');\r\n        } else {\r\n            requester.invalidNumber.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#r_addressScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        if (required.number.val()){\r\n            required.invalidNumber.addClass('hidden');\r\n        } else {\r\n            required.invalidNumber.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#rd_addressScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        // district\r\n        if (requester.district.val()){\r\n            requester.invalidDistrict.addClass('hidden');\r\n        } else {\r\n            requester.invalidDistrict.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#r_addressScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        if (required.district.val()){\r\n            required.invalidDistrict.addClass('hidden');1\r\n        } else {\r\n            required.invalidDistrict.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#rd_addressScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        // city\r\n        if (requester.city.val()){\r\n            requester.invalidCity.addClass('hidden');\r\n        } else {\r\n            requester.invalidCity.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#r_addressScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        if (required.city.val()){\r\n            required.invalidCity.addClass('hidden');\r\n        } else {\r\n            required.invalidCity.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#rd_addressScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        // state\r\n        if (requester.state.val()){\r\n            requester.invalidState.addClass('hidden');\r\n        } else {\r\n            requester.invalidState.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#r_addressScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        if (required.state.val()){\r\n            required.invalidState.addClass('hidden');\r\n        } else {\r\n            required.invalidState.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#rd_addressScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        // postal code\r\n        if (requester.postalCode.val()){\r\n            requester.invalidPostalCode.addClass('hidden');\r\n        } else {\r\n            requester.invalidPostalCode.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#r_addressScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        if (required.postalCode.val()){\r\n            required.invalidPostalCode.addClass('hidden');\r\n        } else {\r\n            required.invalidPostalCode.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#rd_addressScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        // report\r\n        if (requester.report.val()){\r\n            requester.invalidReport.addClass('hidden');\r\n        } else {\r\n            requester.invalidReport.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#reportScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        // require\r\n        if (requester.request.val()){\r\n            requester.invalidRequest.addClass('hidden');\r\n        } else {\r\n            requester.invalidRequest.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#requestScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        // anticipation\r\n        if ($('#check').is(':checked')){\r\n            if (requester.anticipationCause.val()){\r\n                requester.invalidAnticipationCause.addClass('hidden');\r\n            } else {\r\n                requester.invalidAnticipationCause.removeClass('hidden');\r\n                $('html, body').animate({\r\n                    scrollTop: $('#check').offset().top - 150\r\n                }, 800);\r\n                isValid = false;\r\n            }\r\n        }\r\n        // value \r\n        if (!isNaN(parseInt(moneyToFloat('#valueTree'))) && parseInt(moneyToFloat('#valueTree')) !== 0){\r\n            requester.invalidValueTree.addClass('hidden');\r\n        } else {\r\n            requester.invalidValueTree.removeClass('hidden');\r\n            $('html, body').animate({\r\n                scrollTop: $('#causeScrollTarget').offset().top - 150\r\n            }, 800);\r\n            isValid = false;\r\n        }\r\n        return isValid;\r\n    }\r\n    function moneyToFloat(args){\r\n        let res = parseFloat($(`${args}`).val()\r\n        .replace(\"R$\", \"\")\r\n        .replace(\".\", \"\")\r\n        .replace(\",\", \".\")\r\n        );\r\n        return res;\r\n    }\r\n    function currency(args){\r\n        let res = new Intl.NumberFormat('pt-BR', { \r\n            style: 'currency',\r\n            currency: 'BRL' \r\n        }).format(args);\r\n        return res;\r\n    }\r\n    $('#valueOne').maskMoney({\r\n        prefix:'R$ ',\r\n        allowNegative: true,\r\n        thousands:'.', decimal:',',\r\n        affixesStay: true\r\n    });\r\n    $('#valueTwo').maskMoney({\r\n        prefix:'R$ ',\r\n        allowNegative: true,\r\n        thousands:'.', decimal:',',\r\n        affixesStay: true\r\n    });\r\n\r\n    $('#valueOne').on('change', ()=>{\r\n        if (isNaN(moneyToFloat('#valueTwo'))){\r\n            // se o segundo input esta vazio\r\n            // coloca o valor do primeiro input no total\r\n            $('#valueTree').val(currency(moneyToFloat('#valueOne')));\r\n        } else {\r\n            // se não está vazio verifica se o primeiro valor é vazio\r\n            if (isNaN(moneyToFloat('#valueOne'))){\r\n                // se o primeiro input estiver vazio não há o que somar\r\n                // o segundo input será exibido no resultado\r\n                $('#valueTree').val(currency(moneyToFloat('#valueTwo')));\r\n            } else {\r\n                // se o codigo chegar até aqui nem o primeiro\r\n                // nem o segundo input são vazios então realiza\r\n                // a soma\r\n                let res = moneyToFloat('#valueOne') + moneyToFloat('#valueTwo');\r\n                $('#valueTree').val(currency(res));\r\n            }\r\n        }\r\n        if (isNaN(moneyToFloat('#valueTree'))){\r\n            $('#valueTree').val(currency(0));\r\n        }\r\n    });\r\n    $('#valueTwo').on('change', ()=>{\r\n        if (isNaN(moneyToFloat('#valueOne'))){\r\n            // se o primeiro input esta vazio\r\n            // coloca o valor do segundo input no total\r\n            $('#valueTree').val(currency(moneyToFloat('#valueTwo')));\r\n        } else {\r\n            // se não está vazio verifica se o segundo valor é vazio\r\n            if (isNaN(moneyToFloat('#valueTwo'))){\r\n                // se o segundo input estiver vazio não há o que somar\r\n                // o primeiro input será exibido no resultado\r\n                $('#valueTree').val(currency(moneyToFloat('#valueOne')));\r\n            } else {\r\n                // se o codigo chegar até aqui nem o primeiro\r\n                // nem o segundo input são vazios então realiza\r\n                // a soma\r\n                let res = moneyToFloat('#valueOne') + moneyToFloat('#valueTwo');\r\n                $('#valueTree').val(currency(res));\r\n            }\r\n        }\r\n        if (isNaN(moneyToFloat('#valueTree'))){\r\n            $('#valueTree').val(currency(0));\r\n        }\r\n    });\r\n\r\n    $('#sendBtn').on('click', ()=> {\r\n        \r\n        validateValues();\r\n        if (validateValues()){\r\n            \r\n            //name\r\n            targets.requesterName.text(requester.name.val().toUpperCase());\r\n            targets.requiredName.text(required.name.val().toUpperCase());\r\n            // address\r\n            targets.requesterAddress.text(\r\n                \"R: \" + requester.street.val().toUpperCase() +\r\n                \" N: \" + requester.number.val().toUpperCase() +\r\n                \" \" + requester.city.val().toUpperCase() +\r\n                \"/\" + requester.state.val().toUpperCase() +\r\n                \" CEP: \" + requester.postalCode.val().toUpperCase()\r\n            );\r\n            targets.requiredAddress.text(\r\n                \"R: \" + required.street.val().toUpperCase() +\r\n                \" N: \" + requester.number.val().toUpperCase() +\r\n                \" \" + requester.city.val().toUpperCase() +\r\n                \"/\" + required.state.val().toUpperCase() +\r\n                \" CEP: \" + requester.postalCode.val().toUpperCase()\r\n            );\r\n            // document\r\n            targets.requesterDocument.text(requester.document.val());\r\n            targets.requiredDocument.text(required.document.val());\r\n            // email\r\n            targets.requesterEmail.text(requester.email.val());\r\n            targets.requiredEmail.text(required.email.val());\r\n            // phone\r\n            targets.requesterPhone.text(requester.phone.val());\r\n            targets.requiredPhone.text(required.phone.val());\r\n            // report\r\n            targets.report.text(requester.report.val());\r\n            // request\r\n            targets.requestText.text(requester.request.val());\r\n            // values\r\n            targets.firstValue.text(requester.valueOne.val());\r\n            targets.secondValue.text(requester.valueTwo.val());\r\n            targets.thirdValue.text(requester.valueTree.val());\r\n            // date\r\n            let date = new Date();\r\n            let day = date.getDate();\r\n            let month = date.getMonth();\r\n            let year = date.getFullYear();\r\n            let min = date.getMinutes();\r\n            let hours = date.getHours();\r\n            let months = [\r\n                'Janeiro',\r\n                'Fevereiro',\r\n                'Março',\r\n                'Abril',\r\n                'Maio',\r\n                'Junho',\r\n                'Julho',\r\n                'Agosto',\r\n                'Setembro',\r\n                'Outubro',\r\n                'Novembro',\r\n                'Dezembro'\r\n            ];\r\n            let monthName = months[month];\r\n            let formatMonth = month < 10 ? '0' + month : month;\r\n            let formatDay = day < 10 ? '0' + day : day;\r\n            let todayDate = formatDay + '/' + formatMonth + '/' + year;\r\n            let todayIs = `Itapoá (SC), ${formatDay} de ${monthName} de ${year}.`;\r\n            let formatHours = hours < 10 ? '0' + hours : hours;\r\n            let formatMin = min < 10 ? '0' + min : min;\r\n            let timeNow = formatHours + ':' + formatMin;\r\n            targets.date.text(todayIs);\r\n            targets.headerDate.text(todayDate);\r\n            targets.doc2HeaderDate.text(todayDate);\r\n            targets.headerTime.text(timeNow);\r\n            targets.doc2HeaderTime.text(timeNow);\r\n            // signer\r\n            targets.signerName.text(requester.name.val().toUpperCase());\r\n            targets.signerDocument.text(requester.document.val());\r\n            // term\r\n            targets.doc2Name.text(requester.name.val().toUpperCase());\r\n            targets.doc2Document.text(requester.document.val());\r\n            targets.doc2Street.text(requester.street.val().toUpperCase());\r\n            targets.doc2Number.text(requester.number.val());\r\n            targets.doc2District.text(requester.district.val().toUpperCase());\r\n            targets.doc2CityState.text(requester.city.val().toUpperCase() + '/' + requester.state.val().toUpperCase());\r\n            targets.doc2PostalCode.text(requester.postalCode.val());\r\n            targets.doc2Phone.text(requester.phone.val());\r\n            targets.doc2Email.text(requester.email.val());\r\n            targets.doc2Date.text(todayIs);\r\n            targets.doc2Signer.text(requester.name.val().toUpperCase());\r\n\r\n            if ($('#check').is(':checked')){\r\n                targets.anticipationBol.text('Sim');\r\n                targets.anticipationText.text(requester.anticipationCause.val());\r\n            } else {\r\n                targets.anticipationBol.text('Não');\r\n                targets.anticipationText.text('Não há solicitação de antecipação de tutela nesta causa.');\r\n            }\r\n\r\n            alert('Seu documento foi gerado com sucesso. Clique em imprimir para realizar o download!');\r\n            $('#printBtn').removeClass('hidden');\r\n        }\r\n    });\r\n    $('#printBtn').on('click', ()=>{\r\n        $('#doc1').css(\"display\", \"flex\");\r\n        $('#doc2').css(\"display\", \"flex\");\r\n        $('#pageMain').css(\"display\", \"none\");\r\n        $('#pageFooter').css(\"display\", \"none\");\r\n        print();\r\n        \r\n    });\r\n    $('#check').on('change', () => {\r\n        if ($('#check').is(':checked')){\r\n            $('#anticipationTextBox').removeClass('hidden');\r\n        } else {\r\n            \r\n            $('#anticipationTextBox').addClass('hidden');\r\n        }\r\n    });\r\n    if ($('#check').is(':checked')){\r\n        $('#anticipationTextBox').removeClass('hidden');\r\n    } else {\r\n        $('#anticipationTextBox').addClass('hidden');\r\n    }\r\n\r\n    // popups\r\n    \r\n}\n\n//# sourceURL=webpack://gerenciador-de-processos/./src/scripts/test.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/test.js"]();
/******/ 	
/******/ })()
;