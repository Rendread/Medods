<template>
  <div class="contentWrapper">
    <section>
      <div class="container">
        <div class="client">
          <div class="client-form">
            <span class="ui-title-2">
              <h1>Атрибуты формы:</h1>
              <form class="ClassForm">
                <div class="form-item">
                  <p>Фамилия*</p>
                  <div class="container-form-item" :class="{ errorInput: $v.surnameName.$error }">
                    <input
                      type="surnameName"
                      placeholder="Фамилия"
                      v-model="surnameName"
                      :class="{ error: $v.surnameName.$error }"
                      @change="$v.surnameName.$touch()"
                    />
                    <div class="error" v-if="!$v.surnameName.required">
                      Поле обязательно для заполнения.
                    </div>
                  </div>
                </div>
                <div class="form-item">
                  <p>Имя*</p>
                  <div class="container-form-item" :class="{ errorInput: $v.name.$error }">
                    <input
                      type="name"
                      placeholder="Имя"
                      v-model="name"
                      :class="{ error: $v.name.$error }"
                      @change="$v.name.$touch()"
                    />
                    <div class="error" v-if="!$v.name.required">
                      Поле обязательно для заполнения.
                    </div>
                  </div>
                </div>
                <div class="form-item">
                  <p>Отчество</p>
                  <div class="container-form-item">
                    <input type="patronymic" placeholder="Отчество" v-model="patronymic" />
                  </div>
                </div>
                <div class="form-item">
                  <p>Дата рождения*</p>
                  <div class="container-form-item" :class="{ errorInput: $v.date.$error }">
                    <input
                      type="date"
                      placeholder="Дата рождения"
                      v-model="date"
                      :class="{ error: $v.date.$error }"
                      @change="$v.date.$touch()"
                    />
                    <div class="error" v-if="!$v.date.required">
                      Поле обязательно для заполнения.
                    </div>
                  </div>
                </div>
                <div class="form-item">
                  <p>Телефон*</p>
                  <div class="container-form-item" :class="{ errorInput: $v.telephone.$error }">
                    <input
                      type="telephone"
                      placeholder="Номер телефона"
                      v-model="telephone"
                      :class="{ error: $v.telephone.$error }"
                      @change="$v.telephone.$touch()"
                    />
                    <div class="error" v-if="!$v.telephone.required">
                      Поле обязательно для заполнения.
                    </div>
                    <div
                      class="error"
                      v-if="
                        !$v.telephone.minLength || !$v.telephone.maxLength || !$v.telephone.numeric
                      "
                    >
                      Номер телефона введен некорректно.
                    </div>
                  </div>
                </div>
                <div class="form-item">
                  <p>Пол</p>
                  <div class="container-form-item">
                    <select type="gender">
                      <option selected value="Не указан">Не указан</option>
                      <option v-for="(item, key) in gender" v-bind:key="key">{{ item }}</option>
                    </select>
                  </div>
                </div>
                <div class="client-group form-item">
                  <p>
                    Группа клиентов*
                  </p>
                  <div
                    class="container-form-item"
                    :class="{ errorInput: $v.clientGroup.$error || $v.selectedGroups.$error }"
                  >
                    <div
                      v-for="(items, key) in selectedGroups"
                      v-bind:key="key"
                      class="selectedGroup"
                    >
                      {{ items }}
                      <button type="button" v-on:click="removeSelectedGroup(key, selectedGroups)">
                        &times;
                      </button>
                    </div>
                    <select
                      id="select__client__group"
                      v-model="clientGroup"
                      v-on:change="addChangeGroup(clientGroups[clientGroup], selectedGroups)"
                    >
                      <option v-for="(item, key) in clientGroups" :value="key" v-bind:key="key">
                        {{ item }}
                      </option>
                    </select>
                    <div
                      class="error"
                      v-if="
                        !$v.clientGroup.required ||
                          !$v.selectedGroups.minLength ||
                          !$v.selectedGroups.required
                      "
                    >
                      Поле обязательно для заполнения.
                    </div>
                  </div>
                </div>
                <div class="form-item">
                  <p>Лечащий врач</p>
                  <div class="container-form-item">
                    <select>
                      <option selected value="Не указан">Не указан</option>
                      <option v-for="(item, key) in doctors" v-bind:key="key">{{ item }}</option>
                    </select>
                  </div>
                </div>
                <div class="form-item">
                  <p>Не отправлять СМС</p>
                  <div class="container-form-item">
                    <div class="SMS-checkbox-container">
                      <input type="checkbox" placeholder="Номер телефона" v-model="sendSMS" />
                    </div>
                  </div>
                </div>
              </form>
            </span>
          </div>
        </div>
      </div>
    </section>
    <div class="container__address">
      <div class="content__address">
        <h1>Адрес</h1>
        <div class="form-item">
          <p>Индекс</p>
          <div class="container-form-item">
            <input type="postcode" placeholder="Индекс" />
            <div class="error">
              Поле обязательно для заполнения.
            </div>
          </div>
        </div>
        <div class="form-item">
          <p>Страна</p>
          <div class="container-form-item">
            <input type="Country" placeholder="Страна" />
            <div class="error">
              Поле обязательно для заполнения.
            </div>
          </div>
        </div>
        <div class="form-item">
          <p>Область</p>
          <div class="container-form-item">
            <input type="region" placeholder="Область" />
            <div class="error">
              Поле обязательно для заполнения.
            </div>
          </div>
        </div>
        <div class="form-item">
          <p>Город*</p>
          <div class="container-form-item" :class="{ errorInput: $v.sity.$error }">
            <input
              type="sity"
              placeholder="Город"
              v-model="sity"
              :class="{ error: $v.sity.$error }"
              @change="$v.sity.$touch()"
            />
            <div class="error">
              Поле обязательно для заполнения.
            </div>
          </div>
        </div>
        <div class="form-item">
          <p>Улица</p>
          <div class="container-form-item">
            <input type="street" placeholder="Улица" />
            <div class="error">
              Поле обязательно для заполнения.
            </div>
          </div>
        </div>
        <div class="form-item">
          <p>Дом</p>
          <div class="container-form-item">
            <input type="house" placeholder="Дом" />
            <div class="error">
              Поле обязательно для заполнения.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container__address">
      <div class="content__address">
        <h1>Паспорт</h1>
        <div class="form-item">
          <p>Тип документа*</p>
          <div class="container-form-item" :class="{ errorInput: $v.documentType.$error }">
            <select v-model="documentType">
              <option v-for="(item, key) in documentTypes" v-bind:key="key">{{ item }}</option>
            </select>
            <div class="error" v-if="!$v.documentType.required">
              Поле обязательно для заполнения.
            </div>
          </div>
        </div>
        <div class="form-item">
          <p>Серия</p>
          <div class="container-form-item">
            <input type="Country" placeholder="Страна" />
            <div class="error">
              Поле обязательно для заполнения.
            </div>
          </div>
        </div>
        <div class="form-item">
          <p>Номер</p>
          <div class="container-form-item">
            <input type="region" placeholder="Область" />
            <div class="error">
              Поле обязательно для заполнения.
            </div>
          </div>
        </div>
        <div class="form-item">
          <p>Кем выдан</p>
          <div class="container-form-item">
            <input type="postcode" placeholder="Кем выдан" />
            <div class="error">
              Поле обязательно для заполнения.
            </div>
          </div>
        </div>
        <div class="form-item">
          <p>Дата выдачи*</p>
          <div class="container-form-item" :class="{ errorInput: $v.dateOfIssue.$error }">
            <input
              type="date"
              placeholder="Дата выдачи"
              v-model="dateOfIssue"
              :class="{ error: $v.dateOfIssue.$error }"
              @change="$v.dateOfIssue.$touch()"
            />
            <div class="error" v-if="!$v.dateOfIssue.required">
              Поле обязательно для заполнения.
            </div>
          </div>
        </div>
        <div class="container-form-item" :class="{ errorInput: $v.$anyError }">
          <button class="send__button" @click="validate">Submit</button>

          <h1 v-if="complitedForm">Форма успешно создана</h1>
          <div class="error" v-if="$v.$anyError">
            Ошибка создания формы
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength, email, numeric } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      surnameName: "",
      name: "",
      patronymic: "",
      date: "",
      telephone: "7",
      gender: ["Male", "Female"],
      clientGroup: "",
      doctor: "",
      sendSMS: "",
      email: "",
      password: "",
      repeatPassword: "",
      doctors: ["Иванов", "Захаров", "Чернышева"],
      clientGroups: ["VIP", "Проблемные", "ОМС"],
      selected: {
        changed: false,
      },
      selectedGroups: [],
      postcode: "",
      country: "",
      region: "",
      sity: "",
      street: "",
      house: "",
      documentTypes: ["Паспорт", "Свидетельство о рождении", "Вод. удостоверение"],
      series: "",
      number: "",
      issuedBy: "",
      dateOfIssue: "",
      documentType: "",
      complitedForm: false,
    };
  },

  validations: {
    surnameName: { required },
    name: { required },
    date: { required },
    telephone: { required, minLength: minLength(11), maxLength: maxLength(11), numeric },
    clientGroup: { required },

    sity: { required },
    documentType: { required },
    dateOfIssue: { required },
    selectedGroups: { minLength: minLength(1), required },
  },
  methods: {
    validate() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.complitedForm = true;
      }
      if (this.$v.$invalid) {
        this.complitedForm = false;
      }
    },
    addChangeGroup(clientGroup, selectedGroups) {
      console.log(selectedGroups);
      selectedGroups.indexOf(clientGroup) == -1 ? selectedGroups.push(clientGroup) : 0;
      console.log(selectedGroups);
    },
    removeSelectedGroup(key, selectedGroups) {
      selectedGroups.splice(selectedGroups.indexOf(key), 1);
      console.log(selectedGroups);
    },
  },
};
</script>

<style lang="scss" scoped>
.client {
  display: flex;
  justify-content: center;
}
.client-form {
  width: 80%;

  .form-item {
    display: flex;
    justify-content: space-between;
    p {
      margin: 20px 0px 0px 0px;
    }
    .container-form-item {
      flex-direction: column;
      display: flex;
      justify-content: center;
      width: 70%;
      height: 100%;
      .SMS-checkbox-container {
        display: block;
        width: 30px;
        margin-left: 10px;
        text-align: center;
        input {
          width: 15px;
          height: 15px;
          transform: scale(2);
          &.error {
          }
        }
      }

      &.errorInput {
        .error {
          display: block;
        }
      }

      .error {
        display: none;
        margin-bottom: 8px;
        font-size: 13.4px;
        color: #fc5c65;
      }
      .selectedGroup {
        display: block;
        width: 70%;
        height: 100%;
        padding: 10px 10px 10px 10px;
        background: rgb(221, 221, 221);
        border-radius: 5px;
        margin-top: 10px;
        height: 20px;
      }
      select {
        display: block;
        border-radius: 5px;
        font-size: 16px;
        background: rgb(221, 221, 221);
        width: 70%;
        border: 0;
        padding: 10px 10px 10px 10px;
        margin: 15px 0px;
        margin-top: 10px;
        overflow-y: hidden;
        &.error {
        }
      }

      input {
        display: block;
        border-radius: 5px;
        font-size: 16px;
        background: rgb(221, 221, 221);
        width: 70%;
        border: 0;
        padding: 10px 10px;
        margin: 15px 0px;
        margin-top: 10px;
        &.error {
          background-color: rgb(255, 210, 210);
        }
      }
    }
  }

  @media (max-width: 767px) {
    .form-item {
      flex-direction: column;
      justify-items: center;
      justify-content: center;
      .container-form-item {
        .selectedGroup {
          width: 100%;
        }
        justify-content: space-between;
        width: 100%;
        height: 100%;
        input {
          width: 100%;
        }
        select {
          width: 100%;
          margin-left: 0;
        }
        .SMS-checkbox-container {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 30px;
          text-align: center;
          input {
            width: 15px;
            height: 15px;
          }
        }
      }
    }
  }
}
.send__button {
  margin-top: 50px;
  margin-bottom: 200px;
}
.container__address {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  p {
    margin: 20px 0px 0px 0px;
  }
  .content__address {
    width: 80%;
    .form-item {
      display: flex;
      justify-content: space-between;

      .container-form-item {
        flex-direction: column;
        display: flex;
        justify-content: center;
        width: 70%;
        height: 100%;
        input {
          display: block;
          border-radius: 5px;
          font-size: 16px;
          background: #dddddd;
          width: 70%;
          border: 0;
          padding: 10px 10px;
          margin: 15px 0px;
          margin-top: 10px;
          &.error {
            background-color: rgb(255, 210, 210);
          }
        }

        &.errorInput {
          .error {
            display: block;
          }
        }

        .error {
          display: none;
          margin-bottom: 8px;
          font-size: 13.4px;
          color: #fc5c65;
        }
        .selectedGroup {
          display: block;
          width: 70%;
          height: 100%;
          padding: 10px 10px 10px 10px;
          background: rgb(221, 221, 221);
          border-radius: 5px;
          margin-top: 10px;
          height: 20px;
        }
        select {
          display: block;
          border-radius: 5px;
          font-size: 16px;
          background: rgb(221, 221, 221);
          width: 70%;
          border: 0;
          padding: 10px 10px 10px 10px;
          margin: 15px 0px;
          margin-top: 10px;
          overflow-y: hidden;
          &.error {
            background-color: rgb(255, 210, 210);
          }
        }
      }
    }
  }
}
.container__address:last-child {
  margin-bottom: 200px;
}

@media (max-width: 767px) {
  .container__address {
    margin-top: 30px;
    .content__address {
      .form-item {
        flex-direction: column;
        justify-items: center;
        justify-content: center;
        .container-form-item {
          .selectedGroup {
            width: 100%;
          }
          justify-content: space-between;
          width: 100%;
          height: 100%;
          input {
            width: 100%;
          }
          select {
            width: 100%;
            margin-left: 0;
          }
          .SMS-checkbox-container {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 30px;
            text-align: center;
            input {
              width: 15px;
              height: 15px;
            }
          }
        }
      }
    }
  }
}
// BUTTON //
.container-form-item {
  .send__button {
    border-radius: 5px;
    font-size: 16px;
    background: #dddddd;
    width: 50%;
    border: 0;
    padding: 10px 10px;
    margin: 15px 0px;
    margin-top: 10px;
  }
  .error {
    display: none;
  }
  &.errorInput {
    .error {
      display: block;
    }
  }
}
</style>
