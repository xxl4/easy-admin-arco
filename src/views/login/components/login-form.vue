<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">{{ $t('login.form.title') }}</div>
    <div class="login-form-sub-title">{{ $t('login.form.title') }}</div>
    <div class="login-form-error-msg">{{ errorMessage }}</div>
    <a-form
      ref="loginForm"
      :model="userInfo"
      class="login-form"
      layout="vertical"
      @submit="handleSubmit"
    >
      <a-form-item
        field="username"
        :rules="[{ required: true, message: $t('login.form.userName.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input
          v-model="userInfo.username"
          :placeholder="$t('login.form.userName.placeholder')"
        >
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="password"
        :rules="[{ required: true, message: $t('login.form.password.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input-password
          v-model="userInfo.password"
          :placeholder="$t('login.form.password.placeholder')"
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item 
        field="code"
        :rules="[{ required: true, message: $t('login.form.code.errMsg')}]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
      <a-input
          v-model="userInfo.code"
          :placeholder="$t('login.form.code.placeholder')"
        >
        <template #append>
                  <img
                    v-if="captchaData.base64"
                    width="100"
                    height="40"
                    :src="captchaData.base64"
                    @click="fetchCaptcha()"
                  />
                </template>
          <template #prefix>
            <icon-code />
          </template>
        </a-input>
      </a-form-item>
      <a-space :size="16" direction="vertical">
        <div class="login-form-password-actions">
          <a-checkbox
            checked="rememberMe"
            :model-value="loginConfig.rememberMe"
            @change="setRememberPassword as any"
          >
            {{ $t('login.form.rememberPassword') }}
          </a-checkbox>
          <!-- <a-link>{{ $t('login.form.forgetPassword') }}</a-link> -->
        </div>
        <a-button type="primary" html-type="submit" long :loading="loading">
          {{ $t('login.form.login') }}
        </a-button>
        <!--
        <a-button type="text" long class="login-form-register-btn">
          {{ $t('login.form.register') }}
        </a-button>
      -->
      </a-space>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { Message } from '@arco-design/web-vue';
  import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
  import { useI18n } from 'vue-i18n';
  import { useStorage } from '@vueuse/core';
  import { useUserStore } from '@/store';
  import useLoading from '@/hooks/loading';
  import { LoginData, captcha} from '@/api/user';

  const captchaData = ref({
    base64: '',
    id: '',
    expire: 30,
  });

  const timeInter: any = ref(null);

  const router = useRouter();
  const { t } = useI18n();
  const errorMessage = ref('');
  const { loading, setLoading } = useLoading();
  const userStore = useUserStore();

  const loginConfig = useStorage('login-config', {
    rememberMe: true,
    username: 'admin', // 演示默认值
    password: 'wgYoVaLXNGCXqcNY', // demo default value
  });
  const userInfo = reactive({
    rememberMe: loginConfig.value.rememberMe,
    username: loginConfig.value.username,
    password: loginConfig.value.password,
    code: '',
    uuid: '',
  });
  const fetchCaptcha = async () => {
    const data = await captcha({ name: 'login' });
    // console.log(data);
    captchaData.value.base64 = data.data;
    captchaData.value.id = data.id;
    userInfo.uuid = data.id;

    clearInterval(timeInter.value);
    // eslint-disable-next-line no-use-before-define
    autoFetchCaptcha();
  };

  const autoFetchCaptcha = async () => {
    timeInter.value = setInterval(() => {
      fetchCaptcha();
    }, 30 * 1000);
  };

  fetchCaptcha();

  const handleSubmit = async ({
    errors,
    values,
  }: {
    errors: Record<string, ValidatedError> | undefined;
    values: Record<string, any>;
  }) => {
    if (loading.value) return;
    if (!errors) {
      setLoading(true);
      try {
        await userStore.login(values as LoginData);
        console.log(userInfo);
        const { redirect, ...othersQuery } = router.currentRoute.value.query;
        router.push({
          name: (redirect as string) || 'dashboard',
          query: {
            ...othersQuery,
          },
        });
        Message.success(t('login.form.login.success'));
        const { rememberMe } = loginConfig.value;
        const { username, password } = values;
        // 实际生产环境需要进行加密存储。
        // The actual production environment requires encrypted storage.
        loginConfig.value.username = rememberMe ? username : '';
        loginConfig.value.password = rememberMe ? password : '';
      } catch (err) {
        errorMessage.value = (err as Error).message;
      } finally {
        setLoading(false);
      }
    }
  };
  const setRememberPassword = (value: boolean) => {
    loginConfig.value.rememberMe = value;
  };
</script>

<style lang="less" scoped>
  .login-form {
    &-wrapper {
      width: 320px;
    }

    &-title {
      color: var(--color-text-1);
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
    }

    &-sub-title {
      color: var(--color-text-3);
      font-size: 16px;
      line-height: 24px;
    }

    &-error-msg {
      height: 32px;
      color: rgb(var(--red-6));
      line-height: 32px;
    }

    &-password-actions {
      display: flex;
      justify-content: space-between;
    }

    &-register-btn {
      color: var(--color-text-3) !important;
    }
  }
</style>
