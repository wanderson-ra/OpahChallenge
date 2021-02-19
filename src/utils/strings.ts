import LocalizedStrings from "react-native-localization";

export const strings = new LocalizedStrings({
    "pt-BR": {
        locale: "pt-br",
        dialog: {
            attention: "Atenção",
        },
        message: {
            recoverPassword: "Para sua segurança não divulgue sua senha para estranhos.",
            operationSuccess: "Operação concluída com sucesso!",
        },
        placeholder: {
            search: "Buscar por nome",
            firstName: "Nome",
            lastName: "Sobrenome",
            birthDate: "Data de Aniversário",
            username: "Email",
            password: "Password",
            confirmPassword: "Confirmar Senha",
            cellPhone: "Celular",
            phone: "Telefone",
            crm: "CRM/UF",
            startJobArea: "Data de início na medicina",
            email: "E-mail",
            motherName: "Nome da mãe",
            fatherName: "Nome do pai",
            responsible: "Responsável",
            degreeKinship: "Grau de parentesco",
            nationality: "Nacionalidade",
            height: "Altura",
            weight: "Peso",
        },
        text: {
            dontHaveAccount: "Não tem uma conta?",
            createAccount: "Inscrever-se",
            selectGender: "Selecione um genêro",
            specialities: "Selecione suas especialidades",
            welcome: "Bem Vindo ao Web Doctor!",
            resumeWelcome:
                "Tenha total controle sob duas consultas e pacientes. Ganhe mais autonômia e liberdade. Quer saber como " +
                "Click no botão iniciar e crie já sua conta. Ou se já tem uma conta click em login.",
            welcomeHome: "Olá {0}",
            helpMessage: "Como podemos te ajudar hoje?",
            patientNotFound: "Não foram encontrados pacientes.",
            hello: "Olá",
        },
        title: {
            page: {
                signUp: "Inscrever-se",
                forgetPassword: "Recuperar senha",
                schedules: "Agendamentos",
                home: "Web Doctor",
                patients: "Pacientes",
                patient: "Paciente",
                createPatients: "Novo Paciente",
                anamneses: "Anamneses",
                exams: "Exames",
                consultations: "Consultas",
                promotion: "Promoção",
            },

            cardsListHome: {
                scheduledTo: "Agendado para",
                realizedIn: "Realizada em",
            },

            homeActions: {
                lasConsultations: "Últimas Consultas",
                nextConsultations: "Próximas Consultas",
                fastActions: "Ações Rápidas",
            },
        },
        button: {
            ok: "Ok",
            tryAgain: "Tentar Novamente",
            forgetPassword: "Esqueceu a senha?",
            signIn: "Entrar",
            signUp: "Inscrever-se",
            next: "Próximo",
            previous: "Voltar",
            Conclude: "Concluir",
        },
        error: {
            input: {
                invalidUserName: "O nome de usuário precisa de no minimo dois caracteres.",
                invalidPassword: "8 caracters entre, números, letras e especiais.",
                invalidConfirmPassword: "Senha e senha de confirmação devem corresponder.",
                invalidFirstName: "O nome precisa de no minimo dois caracteres.",
                invalidLastName: "O sobrenome precisa de no minimo dois caracteres.",
                invalidBirthDate: "Data de aniversário inválida.",
                invalidCellPhone: "Celular inválido.",
                invalidCrm: "CRM inválido.",
                invalidStartJobArea: "Data de início inválida.",
                invalidEmail: "E-mail inválido.",
                invalidMotherName: "O nome da mãe precisa de no minimo dois caracteres.",
                invalidNationality: "Nacionalidade inválida",
            },
            dialog: "Ops, algo deu errado!",
            default: "Ocorreu um erro inesperado. Por favor tente novamente.",
            userAlreadyExist: "Já existe um usuário cadastrado com esse CRM.",
            userEmailAlreadyExists: "Já existe um usuário cadastrado com esse E-Mail.",
            invalidEmailOrPassword:
                "Email ou senha inválidos. Por favor revise suas credências. Caso tenha esquecido click em recuperar senha.",
            accountNotVerification:
                "Conta ainda não verificada. Por favor click no link enviado para seu email de cadastro para validar sua conta.",
            patientAlreadyExists:
                "Já existe um paciente cadastro com o e-mail fornecido. Favor verifique os dados e tente novamente.",
            noAuthorized: "Sua sessão expirou. Par sua segurança refaça seu Log In",
        },
        createAccountSteps: ["Pessoais", "Profissionais", "Conta"],
        createPatientSteps: ["Pessoais", "Familiar", "Clínicos", "Endereço", "Avatar"],

        bottomTabs: {
            home: "Casa",
            planets: "Planetas",
            account: "Conta",
        },
    },

    en: {
        locale: "en",
        dialog: {
            attention: "Attention",
        },
        message: {
            recoverPassword: "For your safety, do not divulge your password to strangers.",
            operationSuccess: "Operation completed successfully!",
        },
        placeholder: {
            search: "Find by name",
            firstName: "First Name",
            lastName: "Last Name",
            birthDate: "BirthDate",
            username: "Email",
            password: "Password",
            confirmPassword: "Confirm Password",
            cellPhone: "CellPhone",
            phone: "Phone",
            crm: "CRM/UF",
            startJobArea: "Start date in medicine",
            email: "E-mail",
            motherName: "Mother's name",
            fatherName: "Father's name",
            responsible: "Responsible",
            degreeKinship: "degreeKinship",
            nationality: "Nationality",
            height: "Height",
            weight: "Weight",
        },

        text: {
            dontHaveAccount: "Dont't have account?",
            createAccount: "Sign Up",
            selectGender: "Select a Gender",
            specialities: "Select yours specialities",
            welcome: "Welcome to Web Doctor!",
            resumeWelcome:
                "Have total control over two consultations and patients. Gain more autonomy and freedom. Want to know how" +
                " Click on the start button and create your account now. Or if you already have an account click on login.",
            welcomeHome: "Hi {0}",
            helpMessage: "How can we help you today?",
            patientNotFound: "No patients were found.",
            hello: "Hello",
        },
        title: {
            page: {
                signUp: "Sign Up",
                home: "Web Doctor",
                forgetPassword: "Password Recover",
                schedules: "Schedules",
                patients: "Patients",
                patient: "Patient",
                createPatients: "New Patient",
                anamneses: "Anamneses",
                exams: "Exams",
                consultations: "Consultations",
                promotion: "Promotion",
            },

            cardsListHome: {
                scheduledTo: "Scheduled to",
                realizedIn: "Realized in",
            },

            homeActions: {
                lasConsultations: "Last Consultations",
                nextConsultations: "Next Consultations",
                fastActions: "Fast Actions",
            },
        },
        button: {
            ok: "Ok",
            tryAgain: "Try Again",
            forgetPassword: "Forget password?",
            signIn: "Sign In",
            signUp: "Sign Up",
            send: "Send",
            next: "Next",
            previous: "Previous",
            Conclude: "Conclude",
        },
        error: {
            input: {
                invalidUserName: "The username needs at least two characters.",
                invalidPassword: "8 characters between, numbers, letters and specials.",
                invalidConfirmPassword: "Password and Confirmation Password must match.",
                invalidFirstName: "The first name needs at least two characters.",
                invalidLastName: "The last name needs at least two characters.",
                invalidBirthDate: "Invalid birth date",
                invalidCellPhone: "Invalid Cell Phone",
                invalidCrm: "Invalid CRM",
                invalidStartJobArea: "Invalid start job area",
                invalidEmail: "Invalid e-mail.",
                invalidMotherName: "Mother's name needs at least two characters.",
                invalidNationality: "Invalid nationality",
            },
            dialog: "Ops, Something went wrong!",
            default: "An unexpected error has occurred. Please try again.",
            userAlreadyExist: "There is already a user registered with this CRM.",
            userEmailAlreadyExists: "There is already a user registered with this E-Mail.",
            invalidEmailOrPassword:
                "Invalid email or password. Please review your credentials. If you have forgotten to click on recover password.",
            accountNotVerification:
                "Account not yet verified. Please click on the link sent to your registration email to validate your account.",
            patientAlreadyExists:
                "There is already a patient register with the email provided. Please check the data and try again.",
            noAuthorized: "Your session has expired. For your security, redo your Log In",
        },

        createAccountSteps: ["Personal", "Professionals", "Account"],
        createPatientSteps: ["Personal", "Family", "Clinics", "Address", "Avatar"],

        bottomTabs: {
            home: "Home",
            planets: "Planets",
            account: "Account",
        },
    },
});
